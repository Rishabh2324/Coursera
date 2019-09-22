const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
const leaderRouterId = express.Router();

leaderRouter.use(bodyParser.json());
leaderRouterId.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We will semd the leader');
    })
    .post((req, res, next) => {
        res.end('Will update the leader eith details' + req.body.name + 'with details' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /leaders/');
    })
    .delete((req, res, next) => {
        res.end('will delete the leader')
    })
leaderRouterId.route('/')
    .get((req, res, next) => {
        res.end('we will send you leader : ' + req.params.leaderId + 'to you!');
    })
    .post((req, res, next) => {
        res.end('Post operation not supported on /leaders/' + req.params.leaderId);

    })
    .put((req, res, next) => {
        res.write('Updating the leader : ' + req.params.leaderId + '\n');
        res.end('Will update the leader :' + req.body.name + 'with details' + req.body.description);

    })
    .delete((req, res, next) => {
        res.end('Deleting leader:' + req.params.leaderId);
    })


module.exports = leaderRouter;
module.exports = leaderRouterId;

