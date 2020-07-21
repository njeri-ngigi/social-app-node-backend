import { GraphQLObjectType } from 'graphql';
import { UserType, UserInputType } from './types';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        input: { type: UserInputType }
      }
    }
  }
});

export default mutationType;
