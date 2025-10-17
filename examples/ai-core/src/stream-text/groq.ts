import { groq } from '@ai-sdk/groq';
import { run } from '../lib/run';
import { streamText } from 'ai';

run(async () => {
  const result = streamText({
    model: groq('gemma2-9b-it'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }

  console.log();
  console.log('Token usage:', await result.usage);
  console.log('Finish reason:', await result.finishReason);
});
