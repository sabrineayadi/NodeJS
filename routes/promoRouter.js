const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/');

promoRouter.all('/promotions', (req,res,next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
promoRouter.get('/promotions', (req,res,next) => {
    res.end('Will send all the promotions to you!');
});
promoRouter.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
});
promoRouter.put('/promotions', (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
});
promoRouter.delete('/promotions', (req,res,next) => {
    res.end('Deleting all promotions');
});

promoRouter.get('/promotions/:promotionId', (req, res, next) => {
    res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
  });
  promoRouter.post('/promotions/:promotionId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promotionId);
  });
  
  promoRouter.put('/promotions/:promotionId', (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  promoRouter.delete('/promotions/:promotionId', (req, res, next) => {
      res.end('Deleting promotion: ' + req.params.promotionId);
  });

module.exports = promoRouter;