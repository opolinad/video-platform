import express, { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import morgan  from 'morgan';
import { connection } from './db/models';
import routes from './api/routes';

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/api', routes);

connection.authenticate().then(() => {
  console.log('Database connection succesful');
  app.listen(PORT, () => {
    console.log(`Express is listening at http://localhost:${PORT}`);
  });
})
  .catch(error => {
    console.error(error);
  });
