import { fireworks } from '@ai-sdk/fireworks';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const result = await generateImage({
    model: fireworks.image(
      'accounts/fireworks/models/stable-diffusion-xl-1024-v1-0',
    ),
    prompt: 'A burrito launched through a tunnel',
    size: '1024x1024',
    seed: 0,
    n: 2,
    providerOptions: {
      fireworks: {
        // https://fireworks.ai/models/fireworks/stable-diffusion-xl-1024-v1-0/playground
        cfg_scale: 10,
        steps: 30,
      },
    },
  });

  await presentImages(result.images);
});
