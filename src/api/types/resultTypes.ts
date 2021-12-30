import { GraphQLObjectType, GraphQLUnionType } from 'graphql';
import { BadRequestType, UnauthorizedAccessType } from './errorType';
import { MonsterType } from './monsterType';

export const MonsterMutationResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterMutationResult',
  description: 'Resulting data from mutating Monster resources.',
  types: [UnauthorizedAccessType, MonsterType, BadRequestType],
  resolveType: val => {
    if (val.name && val.id) return 'Monster';
    else if (val instanceof GraphQLObjectType && val.name === 'UnauthorizedAccess') return 'UnauthorizedAccess'
    else return 'BadRequest'
  }
  
  
  // resolveType: val => val.name && val.id ? 'Monster' : 'UnauthorizedAccess'
});