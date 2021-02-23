'use strict';

var properties = require('../package.json')
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'notification-app',
    brokers: ['localhost:9092']
});

const topicName = 'notify';

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
        async function processProducer (){
            const producer = kafka.producer();
            await producer.connect();
            for (let i = 0; i < 3; i++) {
                await producer.send({
                    topic: topicName,
                    messages: [
                        { value: req },
                    ],
                });
            }
        };
        
        processProducer().then(() => {
            console.log(req + " publiched into topic " + topicName);
            // process.exit();
        });
    }
};

module.exports = controller;