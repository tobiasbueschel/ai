import { fal } from '@ai-sdk/fal';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const { images } = await generateImage({
    model: fal.image('fal-ai/luma-photon'),
    prompt: 'A hyrax atop a stump in a forest among fireflies at dusk',
  });
  await presentImages(images);
});
