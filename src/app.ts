import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT;


app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});