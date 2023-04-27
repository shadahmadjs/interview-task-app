import { schema } from 'normalizr';

const gameSchema = new schema.Entity('games', {}, { idAttribute: 'id' });

export const gameListSchema = new schema.Array(gameSchema);
