import { vertex } from '@ai-sdk/google-vertex';
import { run } from '../lib/run';
import { streamObject } from 'ai';
import { z } from 'zod';

run(async () => {
  const result = streamObject({
    model: vertex('gemini-1.5-pro'),
    schema: z.object({
      characters: z.array(
        z.object({
          name: z.string(),
          class: z
            .string()
            .describe('Character class, e.g. warrior, mage, or thief.'),
          description: z.string(),
        }),
      ),
    }),
    prompt:
      'Generate 3 character descriptions for a fantasy role playing game.',
  });

  for await (const partialObject of result.partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }
});
