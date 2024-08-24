import {
  CreateJSONSchemaInput,
  JSONSchema,
} from '../schemas/CreateJSONSchemaInput';
import { VerifyJSONSchema } from '../schemas/VerifyJSONSchema';

export interface IJSONService {
  createJSONSchema: (
    createJSONSchema: CreateJSONSchemaInput,
  ) => Promise<JSONSchema>;

  verifyJSONSchema: (params: VerifyJSONSchema) => Promise<boolean | object>;
}
