import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class JSON {
  @Prop({ type: MongooseSchema.Types.Mixed, required: true })
  schema: Record<string, any>;

  @Prop({ required: true, unique: true })
  schemaName: string;
}

export type JSONDocument = JSON & Document;
export const JSONSchema = SchemaFactory.createForClass(JSON);
