import { deepseek } from '@ai-sdk/deepseek';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: deepseek('deepseek-chat'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log('Text:');
  console.log(result.text);
  console.log();

  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
});
