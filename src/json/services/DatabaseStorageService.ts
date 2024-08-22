import { InjectModel } from '@nestjs/mongoose';

import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput.js';
import { JSON, JSONDocument } from '../models/JSONModel.js';
import { Model } from 'mongoose';
import { IDatabaseStorageService } from '../interfaces/IDatabaseStorageService';
import { BadRequestException } from '@nestjs/common';

export class DatabaseStorageService implements IDatabaseStorageService {
  constructor(@InjectModel(JSON.name) private jsonModel: Model<JSONDocument>) {}

  createJSONSchema = async (
    input: CreateJSONSchemaInput,
  ): Promise<JSONSchema> => {
    try {
      const newJSONSchema = new this.jsonModel(input);
      const savedSchema = await newJSONSchema.save();

      return savedSchema.toObject({ getters: true });
    } catch (error) {
      throw new BadRequestException(error);
    }
  };
}
