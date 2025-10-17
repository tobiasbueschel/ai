import { vertex } from '@ai-sdk/google-vertex';
import { embedMany } from 'ai';
import { run } from '../lib/run';

run(async () => {
  const { embeddings, usage } = await embedMany({
    model: vertex.textEmbeddingModel('text-embedding-004'),
    values: [
      'sunny day at the beach',
      'rainy afternoon in the city',
      'snowy night in the mountains',
    ],
  });

  console.log(embeddings);
  console.log(usage);
});
