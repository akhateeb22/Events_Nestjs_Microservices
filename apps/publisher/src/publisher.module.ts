import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import publisherConfig from './config';
import { RPCRabbitMQModule } from '@app/rabbit-mq';

@Module({
  imports: [
    RPCRabbitMQModule(
      [
        {
          name: publisherConfig.rabbitExchange,
          type: publisherConfig.rabbitExchangeType,
        },
      ],
      publisherConfig.rabbitMQUri,
    ),
    PublisherModule,
  ],
  controllers: [],
  providers: [PublisherService],
})
export class PublisherModule {}
