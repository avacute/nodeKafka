const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'notification-app',
    brokers: ['localhost:9092']
});


const sendTopic  = async (data) => {
    var msg = JSON.parse(data);
    const producer = kafka.producer();
    await producer.connect();
        await producer.send({
            topic: msg.topic,
            messages: [
                { value: JSON.stringify(msg)},
            ],
        });
};
module.exports.sendTopic = sendTopic;
