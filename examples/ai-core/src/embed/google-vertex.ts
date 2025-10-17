import { vertex } from '@ai-sdk/google-vertex';
import { embed } from 'ai';
import { run } from '../lib/run';

run(async () => {
  const { embedding, usage } = await embed({
    model: vertex.textEmbeddingModel('text-embedding-004'),
    value: 'sunny day at the beach',
  });

  console.log(embedding);
  console.log(usage);
});
