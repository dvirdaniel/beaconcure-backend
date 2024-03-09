import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { filesController } from './controller/files.controller';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(filesController);

app.get('/', (req: Request, res: Response) => {
  res.send('Server returned response successfully');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});