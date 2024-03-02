import axios, { type AxiosError } from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 3001;

const apiRouter = express.Router();

app.use(cors());

apiRouter.get('/*', async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2${req.url}`);
    res.json(response.data);
  } catch (error) {
    const err = error as AxiosError;
    res.status(err.response?.status ?? 500).send(err.response?.data || err.message);
  }
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.info(`Server is Fire at http://localhost:${port}`);
});
