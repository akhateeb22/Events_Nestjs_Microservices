import { DynamicModule } from '@nestjs/common';
import {
  RabbitMQExchangeConfig,
  RabbitMQModule,
} from '@golevelup/nestjs-rabbitmq';

export const RPCRabbitMQModule = (
  exchanges: RabbitMQExchangeConfig[],
  uri: string,
  enableControllerDiscovery: boolean = false,
): DynamicModule => {
  return RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges,
    uri,
    enableControllerDiscovery,
  });
};
