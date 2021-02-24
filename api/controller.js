'use strict';

var properties = require('../package.json');
const publisher = require('../service/publisher');

var controller = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version,
           description: properties.description,
           author: properties.author
       }
       res.json(aboutInfo);
   },
    publish: function(req, res) {
        publisher.sendTopic(req);
    }
};

module.exports = controller;