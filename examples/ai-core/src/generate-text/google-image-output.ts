import { google } from '@ai-sdk/google';
import { run } from '../lib/run';
import { generateText } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const result = await generateText({
    model: google('gemini-2.0-flash-exp'),
    prompt: 'Generate an image of a comic cat',
  });

  console.log(result.text);

  for (const file of result.files) {
    if (file.mediaType.startsWith('image/')) {
      await presentImages([file]);
    }
  }
});
