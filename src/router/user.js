// src/router/user.js

import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', (req, res) => res.send('Hello, Maksym!'));

export default router;
