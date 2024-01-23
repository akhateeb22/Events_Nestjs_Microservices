import * as dotenv from 'dotenv';
dotenv.config();

export default {
  millis: parseInt(process.env.MILLIS, 10),
  rabbitMQUri: process.env.RABBITMQ_URI,
  rabbitExchange: process.env.RABBIT_EXCHANGE,
  rabbitExchangeType: process.env.RABBIT_EXCHANGE_TYPE,
  handlerRoutingKey: process.env.HANDLER_ROUTING_KEY,
  loggerRoutingKey: process.env.LOGGER_ROUTING_KEY,
};
