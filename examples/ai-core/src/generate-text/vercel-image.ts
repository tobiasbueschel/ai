import { vercel } from '@ai-sdk/vercel';
import { run } from '../lib/run';
import { generateText } from 'ai';
import fs from 'node:fs';

run(async () => {
  const result = await generateText({
    model: vercel('v0-1.0-md'),
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

  console.log(result.text);
});
