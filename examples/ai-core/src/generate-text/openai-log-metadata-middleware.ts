import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { LanguageModelV3Middleware } from '@ai-sdk/provider';
import { generateText, wrapLanguageModel } from 'ai';

const logProviderMetadataMiddleware: LanguageModelV3Middleware = {
  transformParams: async ({ params }) => {
    console.log(
      'providerOptions: ' + JSON.stringify(params.providerOptions, null, 2),
    );
    return params;
  },
};

run(async () => {
  const { text } = await generateText({
    model: wrapLanguageModel({
      model: openai('gpt-4o'),
      middleware: logProviderMetadataMiddleware,
    }),
    providerOptions: {
      myMiddleware: {
        example: 'value',
      },
    },
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(text);
});
