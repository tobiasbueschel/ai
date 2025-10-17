import {
  GoogleVertexImageProviderOptions,
  vertex,
} from '@ai-sdk/google-vertex';
import { experimental_generateImage as generateImage } from 'ai';
import { run } from '../lib/run';
import { presentImages } from '../lib/present-image';

run(async () => {
  const { image } = await generateImage({
    model: vertex.image('imagen-3.0-generate-002'),
    prompt: 'A burrito launched through a tunnel',
    aspectRatio: '1:1',
    providerOptions: {
      vertex: {
        addWatermark: false,
      } satisfies GoogleVertexImageProviderOptions,
    },
  });

  await presentImages([image]);
});
