import { xai } from '@ai-sdk/xai';
import { run } from '../lib/run';
import { streamText } from 'ai';
import fs from 'node:fs';

run(async () => {
  const result = streamText({
    model: xai('grok-2-vision-1212'),
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe the image in detail.' },
          { type: 'image', image: fs.readFileSync('./data/comic-cat.png') },
        ],
      },
    ],
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
});
