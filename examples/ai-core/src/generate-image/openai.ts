import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { experimental_generateImage as generateImage } from 'ai';
import { presentImages } from '../lib/present-image';

run(async () => {
  const prompt = 'Santa Claus driving a Cadillac';
  const result = await generateImage({
    model: openai.image('gpt-image-1-mini'),
    prompt,
  });

  // @ts-expect-error
  const revisedPrompt = result.providerMetadata.openai.images[0]?.revisedPrompt;

  console.log({
    prompt,
    revisedPrompt,
  });

  await presentImages([result.image]);
});
