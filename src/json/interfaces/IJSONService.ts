import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';

export interface IJSONService {
  createJSONSchema: (
    createJSONSchema: CreateJSONSchemaInput,
  ) => Promise<JSONSchema>;
}
