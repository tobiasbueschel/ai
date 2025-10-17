import { deepseek } from '@ai-sdk/deepseek';
import { run } from '../lib/run';
import { generateText } from 'ai';
import fs from 'node:fs';

const errorMessage = fs.readFileSync('data/error-message.txt', 'utf8');

run(async () => {
  const result = await generateText({
    model: deepseek.chat('deepseek-chat'),
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'You are a JavaScript expert.',
          },
          {
            type: 'text',
            text: `Error message: ${errorMessage}`,
          },
          {
            type: 'text',
            text: 'Explain the error message.',
          },
        ],
      },
    ],
  });

  console.log(result.text);
  console.log(result.usage);
  console.log(result.providerMetadata);
  // "prompt_cache_hit_tokens":1856,"prompt_cache_miss_tokens":5}
});
