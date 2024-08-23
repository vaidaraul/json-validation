import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';

export interface IDatabaseStorageService {
  createJSONSchema: (
    createJSONSchema: CreateJSONSchemaInput,
  ) => Promise<JSONSchema>;

  retrieveJSONSchema: (schema: string) => Promise<JSONSchema>;
}
