import { ObjectId } from 'mongoose';

export interface CreateJSONSchemaInput {
  schema: string;
  schemaName: string;
}

export interface JSONSchema extends CreateJSONSchemaInput {
  _id: ObjectId;
}
