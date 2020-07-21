const { GraphQLObjectType } = require("graphql");
const { UserInputType, UserType, MessageType } = require("./types");

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    login: {
      type: UserType,
      args: {
        input: { type: UserInputType }
      }
    },

    showWelcomeMessage: {
      type: MessageType
    }
  }
});

export default queryType;
