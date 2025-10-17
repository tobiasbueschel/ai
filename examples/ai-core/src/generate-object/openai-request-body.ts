import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateObject } from 'ai';
import { z } from 'zod';

run(async () => {
  const { request } = await generateObject({
    model: openai('gpt-4o-mini'),
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({
            name: z.string(),
            amount: z.string(),
          }),
        ),
        steps: z.array(z.string()),
      }),
    }),
    prompt: 'Generate a lasagna recipe.',
  });

  console.log('REQUEST BODY');
  console.log(request.body);
});
