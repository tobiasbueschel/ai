import { google } from '@ai-sdk/google';
import { run } from '../lib/run';
import { generateText } from 'ai';

run(async () => {
  const result = await generateText({
    model: google('gemini-1.5-flash-002'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  const googleMetadata = result.providerMetadata?.google;

  console.log(result.text);
  console.log();
  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
  console.log('Safety info:', {
    promptFeedback: googleMetadata?.promptFeedback,
    safetyRatings: googleMetadata?.safetyRatings,
  });
});
