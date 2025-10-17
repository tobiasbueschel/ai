import { cerebras as provider } from '@ai-sdk/cerebras';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: provider.chat('llama-3.1-70b'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(result.text);
  console.log();
  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
});
