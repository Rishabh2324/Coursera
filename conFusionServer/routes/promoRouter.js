const express = require('express');
const bodyParser = require('body-parser');

const PromotionRouter = express.Router();
const PromotionRouterId = express.Router();

PromotionRouter.use(bodyParser.json());
PromotionRouterId.use(bodyParser.json());

PromotionRouter.route('/promotion')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We will send the Promotion');
    })
    .post((req, res, next) => {
        res.end('Will update the Promotion eith details' + req.body.name + 'with details' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported on /Promotions/');
    })
    .delete((req, res, next) => {
        res.end('will delete the Promotion')
    })
PromotionRouterId.route('/:promotionId')
    .get((req, res, next) => {
        res.end('we will send you Promotion : ' + req.params.promotionId + 'to you!');
    })
    .post((req, res, next) => {
        res.end('Post operation not supported on /Promotions/' + req.params.promotionId);

    })
    .put((req, res, next) => {
        res.write('Updating the Promotion : ' + req.params.promotionId + '\n');
        res.end('Will update the Promotion :' + req.body.name + 'with details' + req.body.description);

    })
    .delete((req, res, next) => {
        res.end('Deleting Promotion:' + req.params.promotionId);
    })

module.exports = PromotionRouter;
module.exports = PromotionRouterId;



