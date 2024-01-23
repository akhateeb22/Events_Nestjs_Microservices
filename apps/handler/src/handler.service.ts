import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import config from './config';
import { EventRepository } from './data';

@Injectable()
export class HandlerService {
  private logger = new Logger('📥 Handler');
  constructor(private readonly eventRepository: EventRepository) {}

  @RabbitSubscribe({
    exchange: config.rabbitExchange,
    routingKey: config.handlerRoutingKey,
    queue: config.handlerQueue,
  })
  async handleEvent(event: Event) {
    await this.eventRepository.create(event);
    this.logger.log(
      `📢 Handling Event Published From Microservice -1- 🚀, Event Data: ${JSON.stringify(
        event,
      )}`,
    );
  }

  @RabbitRPC({
    exchange: config.rpcExchange,
    routingKey: config.rpcRoutingKey,
    queue: config.rpcQueue,
  })
  async getRecentEvents() {
    return await this.eventRepository.find(null, null, {
      sort: {
        createdAt: -1,
      },
      limit: 10,
    });
  }
}
