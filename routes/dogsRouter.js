import { Router } from 'express';

const dogsRouter = Router();

const logTime = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};

dogsRouter.use(logTime);

dogsRouter.get('/', (req, res) => res.send('Welcome to dog land'));
dogsRouter.get('/about', (req, res) => res.send('About dogs'));

export default dogsRouter;
