import { Module } from '@nestjs/common';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';
import loggerConfig from './config';
import { RPCRabbitMQModule } from '@app/rabbit-mq';

@Module({
  imports: [
    RPCRabbitMQModule(
      [
        {
          name: loggerConfig.rabbitExchange,
          type: loggerConfig.rabbitExchangeType,
        },
        {
          name: loggerConfig.rpcExchange,
          type: loggerConfig.rpcExchangeType,
        },
      ],
      loggerConfig.rabbitMQUri,
      true,
    ),
  ],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
