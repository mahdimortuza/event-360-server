import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routs';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!');
});

export default app;
