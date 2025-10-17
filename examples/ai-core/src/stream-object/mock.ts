import { streamObject } from 'ai';
import { run } from '../lib/run';
import { convertArrayToReadableStream, MockLanguageModelV3 } from 'ai/test';
import { z } from 'zod';

run(async () => {
  const result = streamObject({
    model: new MockLanguageModelV3({
      doStream: async () => ({
        stream: convertArrayToReadableStream([
          { type: 'text-start', id: '0' },
          { type: 'text-delta', id: '0', delta: '{ ' },
          { type: 'text-delta', id: '0', delta: '"content": ' },
          { type: 'text-delta', id: '0', delta: `"Hello, ` },
          { type: 'text-delta', id: '0', delta: `world` },
          { type: 'text-delta', id: '0', delta: `!"` },
          { type: 'text-delta', id: '0', delta: ' }' },
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
    schema: z.object({ content: z.string() }),
    prompt: 'Hello, test!',
  });

  for await (const partialObject of result.partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }
});
