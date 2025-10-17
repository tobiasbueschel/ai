import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { streamObject } from 'ai';

run(async () => {
  const result = streamObject({
    model: openai('gpt-4o-2024-08-06'),
    output: 'no-schema',
    prompt:
      'Generate 3 character descriptions for a fantasy role playing game.',
  });

  for await (const partialObject of result.partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }
});
