import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { streamText } from 'ai';

run(async () => {
  const result = streamText({
    model: openai('gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  // consume stream
  for await (const textPart of result.textStream) {
  }

  console.log('REQUEST BODY');
  console.log((await result.request).body);
});
