import { google } from '@ai-sdk/google';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const { files } = await generateText({
    model: google('gemini-2.5-flash-image-preview'),
    prompt: 'A nano banana in a fancy restaurant',
  });

  console.log(`Generated ${files.length} image files`);
});
