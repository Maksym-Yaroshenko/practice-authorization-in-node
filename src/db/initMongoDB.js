// src/db/initMongoDB.js

import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    const NAME = env('MONGODB_USER');
    const PASSWORD = env('MONGODB_PASSWORD');
    const URL = env('MONGODB_URL');
    const DB = env('MONGODB_DB');

    await mongoose.connect(`mongodb+srv://${NAME}:${PASSWORD}@${URL}/${DB}`);
    console.log('Mongo connection successfully established!');
    // console.log(NAME, PASSWORD, URL, DB);
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
