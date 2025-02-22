// src/server.js

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';

import router from './router/index.js';

const PORT = Number(env('PORT', '5000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use(router);

  app.use(errorHandler);
  app.listen(PORT, console.log(`Server is running on port ${PORT}`));
};
