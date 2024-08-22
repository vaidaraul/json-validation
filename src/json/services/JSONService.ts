import { Inject, Injectable } from '@nestjs/common';
import { IJSONService } from '../interfaces/IJSONService';
import { TYPES } from 'src/config/nest.config';
import { IDatabaseStorageService } from '../interfaces/IDatabaseStorageService';
import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';

@Injectable()
export class JSONService implements IJSONService {
  constructor(
    @Inject(TYPES.IDatabaseStorageService)
    private readonly databaseService: IDatabaseStorageService,
  ) {}

  createJSONSchema = async (
    input: CreateJSONSchemaInput,
  ): Promise<JSONSchema> => {
    return await this.databaseService.createJSONSchema(input);
  };
}
