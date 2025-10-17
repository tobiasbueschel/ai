import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { text, usage } = await generateText({
    model: openai('gpt-3.5-turbo'),
    prompt: 'Invent a new holiday and describe its traditions.',
    abortSignal: AbortSignal.timeout(1000),
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
