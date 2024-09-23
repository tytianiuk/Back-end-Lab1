import express from 'express';
import { healthcheckRouter } from './routes/healthcheck.js';

const server = express();

const PORT = 3000;

server.use('/', healthcheckRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
