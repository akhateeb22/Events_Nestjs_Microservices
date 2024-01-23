import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import loggerConfig from './config';
import { IEvent } from './interfaces';

@Controller('event')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @RabbitSubscribe({
    exchange: loggerConfig.rabbitExchange,
    routingKey: loggerConfig.loggerRoutingKey,
    queue: loggerConfig.loggerQueue,
  })
  logEvent(event: IEvent) {
    this.loggerService.logEvent(event);
  }

  @Get('')
  getRecentEvents() {
    return this.loggerService.getRecentEvents();
  }
}
