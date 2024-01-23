import { Module } from '@nestjs/common';
import { HandlerService } from './handler.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventRepository, EventSchema } from './data';
import handlerConfig from './config';
import { RPCRabbitMQModule } from '@app/rabbit-mq';
import { MongooseConnectionModule } from '@app/mongoose';

@Module({
  imports: [
    RPCRabbitMQModule(
      [
        {
          name: handlerConfig.rabbitExchange,
          type: handlerConfig.rabbitExchangeType,
        },
      ],
      handlerConfig.rabbitMQUri,
    ),
    MongooseConnectionModule(handlerConfig.mongodbUri),
    MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
  ],
  controllers: [],
  providers: [HandlerService, EventRepository],
})
export class HandlerModule {}
