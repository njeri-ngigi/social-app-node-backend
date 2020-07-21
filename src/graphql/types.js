import { 
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLInputObjectType
} from "graphql";

export class Message {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }
}

export class User extends Message {
  constructor(message, status, { token, email }) {
    super(message, status);
    this.token = token;
    this.email = email;
  }
}

const messageFields = {
  message: { type: GraphQLString },
  status: { type: GraphQLInt },
}; 

export const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: {
    ...messageFields
  }
});

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    token: { type: GraphQLString },
    email: { type: GraphQLString },
    ...messageFields
  }
});

export const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  fields: {
    email: { type: GraphQLString },
  }
});
