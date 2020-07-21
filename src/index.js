import express from 'express';

import env from './environment';
import apiRouter from './views/routes';

const app = express();
const { PORT } = env;

app.use(express.json());
app.use('/social-app', apiRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
