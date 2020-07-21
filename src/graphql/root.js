import crypto from 'crypto';
import { Message, User } from './types';
import DB from './fakeuserdb';

export default {
  showWelcomeMessage: () => (
    new Message('Welcome to Social App Backend Graphql', 200)
  ),

  signup: ({input}) => {
    const { email } = input;
    const token = crypto.randomBytes(20).toString('hex');
    DB.push(email);
    
    const userData = { email, token };

    return new User('Account created!', 201, userData);
  },

  login: ({input}) => {
    const { email } = input;
    if (!DB.includes(email)) {
      return new Message('User account not found.', 404);
    }

    const token = crypto.randomBytes(20).toString('hex');
    const userData = { email, token };

    return new User('Login Successful', 200, userData);
  }
};
