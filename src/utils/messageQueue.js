const amqplib = require("amqplib");

const createChannel = async () => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
    return channel;
  } catch (error) {
    console.log("Error in message Queue :" + error);
    throw error;
  }
};

const subscribeMessage = async (channel, service, binding_key) => {
  try {
    const applicationQueue = await channel.assertQueue("QUEUE_NAME");

    channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(applicationQueue.queue, (msg) => {
      console.log("received data");
      console.log(msg.content.toString());
      channel.ack(msg);
    });
  } catch (error) {
    console.log("Error in message Queue :" + error);
    throw error;
  }
};

const publishMessage = async (channel, message, binding_key) => {
  try {
    const applicationQueue = await channel.assertQueue("QUEUE_NAME");
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    console.log("Error in publishing message in message Queue :" + error);
    throw error;
  }
};

module.exports = {
  createChannel,
  subscribeMessage,
  publishMessage,
};
