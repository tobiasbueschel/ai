import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { embed } from 'ai';
import { run } from '../lib/run';

run(async () => {
  const togetherai = createOpenAICompatible({
    baseURL: 'https://api.together.xyz/v1',
    name: 'togetherai',
    headers: {
      Authorization: `Bearer ${process.env.TOGETHER_AI_API_KEY}`,
    },
  });
  const model = togetherai.textEmbeddingModel('BAAI/bge-large-en-v1.5');
  const { embedding, usage } = await embed({
    model,
    value: 'sunny day at the beach',
  });

  console.log(embedding);
  console.log(usage);
});
