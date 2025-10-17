import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  // Basic text generation
  const basicResult = await generateText({
    model: openai.responses('gpt-4.1-mini'),
    prompt:
      'Create a program that generates five random numbers between 1 and 100 with two decimal places, and show me the execution results.',
    tools: {
      code_interpreter: openai.tools.codeInterpreter({}),
    },
  });

  console.log('\n=== Basic Text Generation ===');
  console.log(basicResult.text);
  console.log('\n=== Other Outputs ===');
  console.log(basicResult.toolCalls);
  console.log(basicResult.toolResults);
});
