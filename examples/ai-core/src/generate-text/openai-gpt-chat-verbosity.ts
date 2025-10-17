import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: openai.chat('gpt-5'),
    prompt: 'Write a poem about a boy and his first pet dog.',
    providerOptions: {
      openai: {
        textVerbosity: 'low',
      },
    },
  });

  console.log('Response:', result.response?.body);
  console.log('Request:', result.request?.body);
});
