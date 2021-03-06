const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const guestsRouter = require('./routes/guests');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/guests', guestsRouter);
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
