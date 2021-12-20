import { GraphQLObjectType, GraphQLString } from "graphql";


export const AuthResponseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'AuthResponse',
  description: 'Response from an authentication request.',
  fields: () => ({
    message: {
      type: GraphQLString,
      description: 'Optional message for the response.'
    },
    token: {
      type: GraphQLString,
      description: 'Auth token that should be returned on success.'
    }
  })
});