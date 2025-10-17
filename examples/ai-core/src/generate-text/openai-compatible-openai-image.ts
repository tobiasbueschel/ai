import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { run } from '../lib/run';
import { generateText } from 'ai';
import fs from 'node:fs';

run(async () => {
  const openai = createOpenAICompatible({
    baseURL: 'https://api.openai.com/v1',
    name: 'openai',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });
  const model = openai.chatModel('gpt-4o-mini');
  const result = await generateText({
    model,
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
