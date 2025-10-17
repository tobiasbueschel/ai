import { generateText } from 'ai';
import { run } from '../lib/run';
import { MockLanguageModelV3 } from 'ai/test';

run(async () => {
  const { text, usage } = await generateText({
    model: new MockLanguageModelV3({
      doGenerate: async () => ({
        content: [{ type: 'text', text: `Hello, world!` }],
        finishReason: 'stop',
        usage: {
          inputTokens: 10,
          outputTokens: 20,
          totalTokens: 30,
        },
        warnings: [],
      }),
    }),
    prompt: 'Hello, test!',
  });

  console.log(text);
  console.log();
  console.log('Usage:', usage);
});
