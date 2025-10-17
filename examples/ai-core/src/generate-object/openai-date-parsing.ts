import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateObject } from 'ai';
import { z } from 'zod';

run(async () => {
  const {
    object: { events },
  } = await generateObject({
    model: openai('gpt-4-turbo'),
    schema: z.object({
      events: z.array(
        z.object({
          date: z
            .string()
            .date()
            .transform(value => new Date(value)),
          event: z.string(),
        }),
      ),
    }),
    prompt: 'List 5 important events from the year 2000.',
  });

  console.log(events);
});
