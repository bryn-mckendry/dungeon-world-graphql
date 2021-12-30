import { GraphQLUnionType } from 'graphql';
import { ApiErrorType } from './errorType';
import { MonsterType } from './monsterType';

export const MonsterMutationResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterMutationResult',
  description: 'Resulting data from mutating Monster resources.',
  types: [ApiErrorType, MonsterType],
  resolveType: val => {
    if (val.name && val.id) return 'Monster';
    else return 'ApiError'
  }
});