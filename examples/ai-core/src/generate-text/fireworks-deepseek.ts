import { fireworks } from '@ai-sdk/fireworks';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: fireworks('accounts/fireworks/models/deepseek-v3'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(result.text);
  console.log();
  console.log('Usage:', result.usage);
});
