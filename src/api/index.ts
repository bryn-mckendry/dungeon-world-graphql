
import { GraphQLSchema } from 'graphql';
import { RootMutationType } from './mutation';
import { RootQueryType } from './query';


const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

export default schema;