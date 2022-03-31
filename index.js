import express from 'express';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import dogsRouter from './routes/dogsRouter.js';
import verifyUserCredentials from './middlewares/verifyUserCredentials.js';
import tracker from './middlewares/tracker.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json()); // middleware that processes the incoming raw json
app.use(tracker);
app.use('/dogs', dogsRouter);

const returnSecretInfo = (req, res) => {
  res.send(`Hello ${req.user}, is this you password? ${req.password}`);
};

app.post('/api', verifyUserCredentials, returnSecretInfo);

app.get('/', (req, res, next) => {
  console.log(req.cookies);
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
