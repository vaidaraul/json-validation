import { ObjectId } from 'mongoose';

export interface CreateJSONSchemaInput {
  schema: object;
  schemaName: string;
}

export interface JSONSchema extends CreateJSONSchemaInput {
  _id: ObjectId;
}
