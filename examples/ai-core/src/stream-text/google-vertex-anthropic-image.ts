import { vertexAnthropic } from '@ai-sdk/google-vertex/anthropic';
import { run } from '../lib/run';
import { streamText } from 'ai';
import fs from 'node:fs';

run(async () => {
  const result = streamText({
    model: vertexAnthropic('claude-3-7-sonnet@20250219'),
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
