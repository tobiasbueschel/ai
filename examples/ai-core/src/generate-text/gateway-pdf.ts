import { generateText } from 'ai';
import { run } from '../lib/run';
import fs from 'node:fs';

run(async () => {
  const result = await generateText({
    model: 'google/gemini-2.0-flash',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'What is an embedding model according to this document?',
          },
          {
            type: 'file',
            data: fs.readFileSync('./data/ai.pdf'),
            mediaType: 'application/pdf',
          },
        ],
      },
    ],
  });

  console.log(result.text);
});
