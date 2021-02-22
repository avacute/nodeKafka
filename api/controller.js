'use strict';

var properties = require('../package.json')

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version,
           description: properties.description,
           author: properties.author
       }
       res.json(aboutInfo);
   },
};

module.exports = controllers;