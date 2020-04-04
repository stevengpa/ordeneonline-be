require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Declaration Global
import('./config/declareGlobal');

import userRoutes from './routes/User/user.routes';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  req.userId = '5e88f8341c9d440000b7019e';
  next();
});

// Routes
app.use('/profile', userRoutes);

const PORT = process.env.PORT || 3030;
const { MONGO_USER, MONGO_PWD, MONGO_DB, MONGO_HOST } = process.env;

mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_HOST}/${MONGO_DB}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));