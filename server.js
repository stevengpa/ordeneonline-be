require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

// Routes

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
    app.listen(() => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));