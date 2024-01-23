import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { IEvent } from './interfaces/event.interface';
import publisherConfig from './config';

@Injectable()
export class PublisherService implements OnModuleInit {
  private logger = new Logger('📥 Handler');

  constructor(private readonly amqpConnection: AmqpConnection) {}

  onModuleInit() {
    setInterval(() => {
      const event = this.createEvent();
      this.amqpConnection.publish(
        publisherConfig.rabbitExchange,
        publisherConfig.handlerRoutingKey,
        event,
      );
      this.amqpConnection.publish(
        publisherConfig.rabbitExchange,
        publisherConfig.loggerRoutingKey,
        event,
      );
    }, publisherConfig.millis);
  }

  createEvent() {
    const name = Math.random().toString(36).substring(2, 12);
    const description = Math.random().toString(36).substring(2, 12);
    const event: IEvent = {
      name,
      description,
    };
    return event;
  }
}
