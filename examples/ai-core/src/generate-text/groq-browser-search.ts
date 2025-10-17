import { groq } from '@ai-sdk/groq';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: groq('openai/gpt-oss-120b'),
    prompt:
      'What are the latest developments in AI? Please search for recent news.',
    tools: {
      browser_search: groq.tools.browserSearch({}),
    },
    toolChoice: 'required',
  });

  console.log(result.text);
  console.log('\nUsage:', result.usage);
});
