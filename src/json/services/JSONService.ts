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
    const schemaResponse = await this.databaseService.retrieveJSONSchema(
      params.schemaName,
    );
    var validationSchema = JSON.parse(schemaResponse.schema);

    for (const [key, type] of Object.entries(validationSchema)) {
      if (type === 'object') {
        if (
          typeof params.jsonObject[key] !== 'object' ||
          params.jsonObject[key] === null
        )
          return false;
      } else if (type === 'array') {
        if (!Array.isArray(params.jsonObject[key])) return false;
      } else if (typeof params.jsonObject[key] !== type) {
        return false;
      }
    }

    return true;
  };
}
