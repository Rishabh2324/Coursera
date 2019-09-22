const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const port = '3000';
const morgan = require('morgan');                      //for serving the html files
const app = express();                                 //application is going to use express server

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use('/', dishRouter);
app.use('/:dishId', dishRouter);
app.use('/', promotionRouter);
app.use('/:promotionId', promotionRouter);
app.use('/leader', leaderRouter);
app.use('/:leaderId', leaderRouter);

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.send('<html><body><h1>This is body of message</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`server started at http://${hostname}:${port} `)
})