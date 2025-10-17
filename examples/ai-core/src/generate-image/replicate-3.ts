import { replicate } from '@ai-sdk/replicate';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const { image } = await generateImage({
    model: replicate.image('recraft-ai/recraft-v3'),
    prompt: 'The Loch Ness Monster getting a manicure',
    size: '1365x1024',
    providerOptions: {
      replicate: {
        style: 'realistic_image',
      },
    },
  });

  await presentImages([image]);
});
