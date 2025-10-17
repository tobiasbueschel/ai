import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const { image } = await generateImage({
    model: openai.image('gpt-image-1'),
    prompt: 'A salamander at sunrise in a forest pond in the Seychelles.',
    providerOptions: {
      openai: { quality: 'high' },
    },
  });

  await presentImages([image]);
});
