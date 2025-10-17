import { huggingface } from '@ai-sdk/huggingface';
import { run } from '../lib/run';
import { streamText } from 'ai';

run(async () => {
  const result = streamText({
    model: huggingface.responses('moonshotai/Kimi-K2-Instruct'),
    prompt: 'Tell me a three sentence bedtime story about a unicorn.',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }

  console.log();
  console.log('Token usage:', await result.usage);
});
