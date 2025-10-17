import { cohere } from '@ai-sdk/cohere';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { text, usage } = await generateText({
    model: cohere('command-a-03-2025'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
