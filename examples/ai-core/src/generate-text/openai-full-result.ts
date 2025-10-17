import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: openai('gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(JSON.stringify(result, null, 2));
});
