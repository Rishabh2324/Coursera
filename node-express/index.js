const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = '3000';
const morgan = require('morgan');                      //for serving the html files
const app = express();                                 //application is going to use express server

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
app.get('/dishes', (req, res, next) => {
    res.end('we will send you dish to you!');
});
app.post('/dishes/', (req, res, next) => {
    res.end('Will update the dish :' + req.body.name + 'with details' + req.body.description);

});
app.put('/dishes/', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /dishes/');
})
app.get('/dishes/:dishId', (req, res, next) => {
    res.end('we will send you dish : ' + req.params.dishId + 'to you!');
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.end('Post operation not supported on /dishes/' + req.params.dishId);

});
app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish : ' + req.params.dishId + '\n');
    res.end('Will update the dish :' + req.body.name + 'with details' + req.body.description);

})
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish:' + req.params.dishId);
})




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