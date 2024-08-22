import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';

export interface IDatabaseStorageService {
  createJSONSchema: (
    createJSONSchema: CreateJSONSchemaInput,
  ) => Promise<JSONSchema>;
}
