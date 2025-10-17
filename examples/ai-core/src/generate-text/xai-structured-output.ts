import { generateText, Output } from 'ai';
import { run } from '../lib/run';
import { xai } from '@ai-sdk/xai';
import { z } from 'zod';

run(async () => {
  const { experimental_output } = await generateText({
    model: xai('grok-3-beta'),
    experimental_output: Output.object({
      schema: z.object({
        name: z.string(),
        age: z.number().nullable().describe('Age of the person.'),
        contact: z.object({
          type: z.literal('email'),
          value: z.string(),
        }),
        occupation: z.object({
          type: z.literal('employed'),
          company: z.string(),
          position: z.string(),
        }),
      }),
    }),
    prompt: 'Generate an example person for testing.',
  });
});
