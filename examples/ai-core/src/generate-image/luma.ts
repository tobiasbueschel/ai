import { luma } from '@ai-sdk/luma';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const result = await generateImage({
    model: luma.image('photon-flash-1'),
    prompt: 'A salamander at dusk in a forest pond, in the style of ukiyo-e',
    aspectRatio: '1:1',
    providerOptions: {
      luma: {
        // add'l options here
      },
    },
  });

  await presentImages(result.images);
});
