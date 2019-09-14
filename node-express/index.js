const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = '3000';

const app = express();                                   //application is going to use express server
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