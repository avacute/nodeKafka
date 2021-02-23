'use strict';

const controller = require('./controller');


module.exports = function(app) {
   app.route('/about').get(controller.about);

   app.post('/publish', function (req, res) {
      res.set('Content-Type', 'application/json')
      const msg = JSON.stringify(req.body);
      console.log(req.body);
      controller.publish(msg);
      res.send(msg)
    });
};