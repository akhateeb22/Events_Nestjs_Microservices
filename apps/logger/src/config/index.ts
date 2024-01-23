import * as dotenv from 'dotenv';
dotenv.config();

export default {
  rabbitMQUri: process.env.RABBITMQ_URI,
  rpcExchange: process.env.RPC_EXCHANGE,
  rpcExchangeType: process.env.RPC_EXCHANGE_TYPE,
  rpcRoutingKey: process.env.RPC_ROUTING_KEY,
  rabbitExchange: process.env.RABBIT_EXCHANGE,
  rabbitExchangeType: process.env.RABBIT_EXCHANGE_TYPE,
  loggerRoutingKey: process.env.LOGGER_ROUTING_KEY,
  loggerQueue: process.env.LOGGER_QUEUE,
};
