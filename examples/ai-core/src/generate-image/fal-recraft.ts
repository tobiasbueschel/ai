import { fal } from '@ai-sdk/fal';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const { images } = await generateImage({
    model: fal.image('fal-ai/recraft/v3/text-to-image'),
    prompt:
      'A Sumatran rhino meandering through a dense forest among fireflies at dusk',
  });
  await presentImages(images);
});
