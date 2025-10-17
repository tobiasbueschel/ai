import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { run } from '../lib/run';
import { generateText } from 'ai';

const deepSeek = createOpenAICompatible({
  name: 'deepseek',
  baseURL: 'https://api.deepseek.com',
  headers: {
    Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY ?? ''}`,
  },
});

run(async () => {
  const { text, usage } = await generateText({
    model: deepSeek('deepseek-chat'),
    prompt: 'Write a "Hello, World!" program in TypeScript.',
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
