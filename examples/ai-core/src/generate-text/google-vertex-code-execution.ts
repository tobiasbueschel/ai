import { vertex } from '@ai-sdk/google-vertex';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: vertex('gemini-2.5-pro'),
    tools: { code_execution: vertex.tools.codeExecution({}) },
    maxOutputTokens: 2048,
    prompt:
      'Use python to calculate 20th fibonacci number. Then find the nearest palindrome to it.',
  });

  console.log(JSON.stringify(result, null, 2));
});
