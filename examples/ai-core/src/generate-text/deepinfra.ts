import { deepinfra } from '@ai-sdk/deepinfra';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { text, usage } = await generateText({
    model: deepinfra('mistralai/Mixtral-8x7B-Instruct-v0.1'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
