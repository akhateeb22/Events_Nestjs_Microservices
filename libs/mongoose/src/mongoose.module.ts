import { DynamicModule } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

export const MongooseConnectionModule = (
  uri: string,
  options?: MongooseModuleOptions,
): DynamicModule => {
  return MongooseModule.forRoot(uri, options);
};
