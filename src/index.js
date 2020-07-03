import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/', (req, res) => res.send('Social App Backend'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
