const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/');

leaderRouter.all('/leaders', (req,res,next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
leaderRouter.get('/leaders', (req,res,next) => {
    res.end('Will send all the leaders to you!');
});
leaderRouter.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});
leaderRouter.put('/leaders', (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
});
leaderRouter.delete('/leaders', (req,res,next) => {
    res.end('Deleting all leaders');
});

leaderRouter.get('/leaders/:leaderId', (req, res, next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
  });
  leaderRouter.post('/leaders/:leaderId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
  });
  
  leaderRouter.put('/leaders/:leaderId', (req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  leaderRouter.delete('/leaders/:leaderId', (req, res, next) => {
      res.end('Deleting leader: ' + req.params.leaderId);
  });

module.exports = leaderRouter;