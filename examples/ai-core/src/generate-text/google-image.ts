import { google } from '@ai-sdk/google';
import { run } from '../lib/run';
import { generateText } from 'ai';
import fs from 'node:fs';

run(async () => {
  const result = await generateText({
    model: google('gemini-1.5-flash'),
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

  console.log(result.content);
});
