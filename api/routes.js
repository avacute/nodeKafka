'use strict';

const controller = require('./controller');


module.exports = function(app) {
   app.route('/about').get(controller.about);

   app.post('/publish/:topic', function (req, res) {
      res.set('Content-Type', 'application/json')
      const { message } = req.body
      if((Object.keys(req.body).length > 1) || (Object.keys(req.body) != "message")){
         res.writeHead(400, "Bad Request", {'Content-Type': 'text/plain'});
         res.write("Bad request");
         res.end();
      }
      const msg = JSON.stringify({"topic":req.param("topic"),"message":message});
      console.log(msg);
      controller.publish(msg);
      res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
      res.write(msg);
      res.end();
    });
};