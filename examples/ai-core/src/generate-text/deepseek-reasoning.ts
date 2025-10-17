import { deepseek } from '@ai-sdk/deepseek';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: deepseek('deepseek-reasoner'),
    prompt: 'How many "r"s are in the word "strawberry"?',
  });

  console.log(result.content);

  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
});
