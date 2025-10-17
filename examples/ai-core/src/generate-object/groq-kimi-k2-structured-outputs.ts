import { groq } from '@ai-sdk/groq';
import { run } from '../lib/run';
import { generateObject } from 'ai';
import { z } from 'zod';

run(async () => {
  const result = await generateObject({
    model: groq('moonshotai/kimi-k2-instruct'),
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.string()),
        instructions: z.array(z.string()),
      }),
    }),
    prompt: 'Generate a simple pasta recipe.',
  });

  console.log(JSON.stringify(result.object, null, 2));
});
