const { Kafka } = require('kafkajs');

// declare kafka instance
const kafka = new Kafka({
    clientId: 'notification-app', 
    brokers: ['localhost:9092']
});

const topicName = 'notify';

const process  = async () => {
    // connect to kafka
    const admin = kafka.admin();
    await admin.connect();

    // create topic with 1 partitions 
    await admin.createTopics({
        topics: [{
            topic: topicName,
            numPartitions: 1,
            replicationFactor: 1
        }
        ],
});
    await admin.disconnect();
};

process().then(() => console.log('topic created successfuly'));