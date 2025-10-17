import { togetherai } from '@ai-sdk/togetherai';
import { embed } from 'ai';
import { run } from '../lib/run';

run(async () => {
  const { embedding, usage } = await embed({
    model: togetherai.textEmbeddingModel('BAAI/bge-base-en-v1.5'),
    value: 'sunny day at the beach',
  });

  console.log(embedding);
  console.log(usage);
});
