import { generateObject } from 'ai';
import { run } from '../lib/run';
import { MockLanguageModelV3 } from 'ai/test';
import { z } from 'zod';

run(async () => {
  const { object, usage } = await generateObject({
    model: new MockLanguageModelV3({
      doGenerate: async () => ({
        content: [{ type: 'text', text: `{"content":"Hello, world!"}` }],
        finishReason: 'stop',
        usage: {
          inputTokens: 10,
          outputTokens: 20,
          totalTokens: 30,
        },
        warnings: [],
      }),
    }),
    schema: z.object({ content: z.string() }),
    prompt: 'Hello, test!',
  });

  console.log(object);
  console.log();
  console.log('Usage:', usage);
});
