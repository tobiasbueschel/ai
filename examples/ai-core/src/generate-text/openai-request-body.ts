import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { request } = await generateText({
    model: openai('gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log('REQUEST BODY');
  console.log(request.body);
});
