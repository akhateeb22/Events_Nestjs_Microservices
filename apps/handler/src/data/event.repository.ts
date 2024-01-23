import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class EventRepository {
  constructor(@InjectModel('Event') private entityModel: Model<Event>) {}

  async create(doc: any, options?: mongoose.SaveOptions) {
    const result = await new this.entityModel(doc).save(options);
    return result._id;
  }

  async find(
    filter?: mongoose.FilterQuery<Event>,
    projection?: mongoose.ProjectionType<Event>,
    options?: mongoose.QueryOptions<Event>,
  ) {
    return await this.entityModel.find(filter, projection, options);
  }
}
