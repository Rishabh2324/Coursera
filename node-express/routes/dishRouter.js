const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
const dishRouterId = express.Router();

dishRouter.use(bodyParser.json());
dishRouterId.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('we will send you dish to you!');
    })
    .post((req, res, next) => {
        res.end('Will update the dish :' + req.body.name + 'with details' + req.body.description);

    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /dishes/');
    })
dishRouterId.route('/')
    .get((req, res, next) => {
        res.end('we will send you dish : ' + req.params.dishId + 'to you!');
    })
    .post((req, res, next) => {
        res.end('Post operation not supported on /dishes/' + req.params.dishId);

    })
    .put((req, res, next) => {
        res.write('Updating the dish : ' + req.params.dishId + '\n');
        res.end('Will update the dish :' + req.body.name + 'with details' + req.body.description);

    })
    .delete((req, res, next) => {
        res.end('Deleting dish:' + req.params.dishId);
    })


module.exports = dishRouter;
module.exports = dishRouterId;