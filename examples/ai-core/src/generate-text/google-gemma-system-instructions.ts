import { google } from '@ai-sdk/google';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: google('gemma-3-12b-it'),
    system:
      'You are a helpful pirate assistant. Always respond like a friendly pirate, using "Arrr" and pirate terminology.',
    prompt: 'What is the meaning of life?',
  });

  console.log(result.text);
  console.log();
  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
});
