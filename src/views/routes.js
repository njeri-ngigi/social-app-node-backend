import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { root, schema } from '../graphql';

import controllers from '../controllers';


const apiRouter = express.Router();

apiRouter.get('/', controllers.welcomeController)
apiRouter.post('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

export default apiRouter;
