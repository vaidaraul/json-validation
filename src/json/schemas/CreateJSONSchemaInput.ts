import { ObjectId } from 'mongoose';

export interface CreateJSONSchemaInput {
  schema: string;
  userID: string;
}

export interface JSONSchema extends CreateJSONSchemaInput {
  _id: ObjectId;
}
