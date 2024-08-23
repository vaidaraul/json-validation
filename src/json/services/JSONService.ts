import { Inject, Injectable } from '@nestjs/common';
import { IJSONService } from '../interfaces/IJSONService';
import { TYPES } from 'src/config/nest.config';
import { IDatabaseStorageService } from '../interfaces/IDatabaseStorageService';
import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';
import { VerifyJSONSchema } from '../schemas/VerifyJSONSchema';

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

  verifyJSONSchema = async (params: VerifyJSONSchema): Promise<boolean> => {
    const schema = await this.databaseService.retrieveJSONSchema(
      params.schemaName,
    );

    try {
    } catch (error) {
      throw new Error('Error parsing JSON: ' + error);
    }
    // console.log(schema);

    return false;
  };
}
