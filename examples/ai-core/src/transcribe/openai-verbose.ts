import { openai } from '@ai-sdk/openai';
import { run } from '../lib/run';
import { experimental_transcribe as transcribe } from 'ai';
import { readFile } from 'fs/promises';

run(async () => {
  const result = await transcribe({
    model: openai.transcription('whisper-1'),
    audio: await readFile('data/galileo.mp3'),
    providerOptions: {
      openai: {
        //timestampGranularities: ['word'],
        timestampGranularities: ['segment'],
      },
    },
  });

  console.log('Text:', result.text);
  console.log('Duration:', result.durationInSeconds);
  console.log('Language:', result.language);
  console.log('Word-level segments:', result.segments);
  console.log('Warnings:', result.warnings);
});
