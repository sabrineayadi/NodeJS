const express = require('express'),
     http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


const dishRouter = require('./routes/dishRouter');
app.use('', dishRouter);

const promoRouter = require('./routes/promoRouter');
app.use('', promoRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});