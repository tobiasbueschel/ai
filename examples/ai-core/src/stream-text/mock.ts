import { streamText } from 'ai';
import { run } from '../lib/run';
import { convertArrayToReadableStream, MockLanguageModelV3 } from 'ai/test';

run(async () => {
  const result = streamText({
    model: new MockLanguageModelV3({
      doStream: async () => ({
        stream: convertArrayToReadableStream([
          { type: 'text-start', id: '0' },
          { type: 'text-delta', id: '0', delta: 'Hello' },
          { type: 'text-delta', id: '0', delta: ', ' },
          { type: 'text-delta', id: '0', delta: `world!` },
          { type: 'text-end', id: '0' },
          {
            type: 'finish',
            finishReason: 'stop',
            logprobs: undefined,
            usage: {
              inputTokens: 3,
              outputTokens: 10,
              totalTokens: 13,
            },
          },
        ]),
      }),
    }),
    prompt: 'Hello, test!',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }

  console.log();
  console.log('Token usage:', await result.usage);
  console.log('Finish reason:', await result.finishReason);
});
