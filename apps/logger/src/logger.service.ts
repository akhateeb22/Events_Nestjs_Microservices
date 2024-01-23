import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import loggerConfig from './config';
import { EventEntity } from './entity.event';
import { IEvent } from './interfaces';

@Injectable()
export class LoggerService {
  private logger = new Logger('🌟 LOGGER');
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async logEvent(event: IEvent) {
    this.logger.log(
      `📢 Logging Event Published From Microservice -1- 🚀, Event Data: ${JSON.stringify(
        event,
      )}`,
    );
  }

  async getRecentEvents() {
    this.logger.log(`🔍 Retrieving the 10 most recent published events 📄`);
    const events = (await this.amqpConnection.request({
      exchange: loggerConfig.rpcExchange,
      routingKey: loggerConfig.rpcRoutingKey,
    })) as IEvent[];
    return events.map((event) => new EventEntity({ event }));
  }
}
