import * as dotenv from 'dotenv';
dotenv.config();

export default {
  rabbitMQUri: process.env.RABBITMQ_URI,
  rpcExchange: process.env.RPC_EXCHANGE,
  rpcExchangeType: process.env.RPC_EXCHANGE_TYPE,
  rabbitExchange: process.env.RABBIT_EXCHANGE,
  rabbitExchangeType: process.env.RABBIT_EXCHANGE_TYPE,
  handlerRoutingKey: process.env.HANDLER_ROUTING_KEY,
  handlerQueue: process.env.HANDLER_QUEUE,
  rpcRoutingKey: process.env.RPC_ROUTING_KEY,
  rpcQueue: process.env.RPC_QUEUE,
  mongodbUri: process.env.MONGO_DB_URI,
};
