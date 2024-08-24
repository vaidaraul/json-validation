import { Inject, Injectable } from '@nestjs/common';
import { IJSONService } from '../interfaces/IJSONService';
import { TYPES } from 'src/config/nest.config';
import { IDatabaseStorageService } from '../interfaces/IDatabaseStorageService';
import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';
import { VerifyJSONSchema } from '../schemas/VerifyJSONSchema';
import Ajv from 'ajv';

// Another option for a hand-made integration
// The AJV library left in the document is faster, works better and fits
// JSON Schema objects.
function validateAgainstSchema(data: any, schema: any): boolean {
  if (typeof data !== 'object' || data === null) return false;

  for (const [key, type] of Object.entries(schema)) {
    if (type === 'object') {
      if (typeof data[key] !== 'object' || data[key] === null) return false;
      if (!validateAgainstSchema(data[key], schema[key])) {
        return false;
      }
    } else if (type === 'array') {
      if (!Array.isArray(data[key])) return false;
    } else if (typeof data[key] !== type) {
      return false;
    }
  }
}

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

  verifyJSONSchema = async (
    params: VerifyJSONSchema,
  ): Promise<boolean | object> => {
    const schemaResponse = await this.databaseService.retrieveJSONSchema(
      params.schemaName,
    );

    const ajv = new Ajv();
    const isDataValid = ajv.validate(schemaResponse.schema, params.jsonObject);
    if (isDataValid) {
      return true;
    } else {
      return ajv.errors;
    }
  };
}
