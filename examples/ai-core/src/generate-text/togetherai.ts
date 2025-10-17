import { togetherai } from '@ai-sdk/togetherai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { text, usage } = await generateText({
    model: togetherai('meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
