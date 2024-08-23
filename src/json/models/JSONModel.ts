import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class JSON {
  @Prop({ required: true, unique: true })
  schema: string;

  @Prop({ required: true })
  schemaName: string;
}

export type JSONDocument = JSON & Document;
export const JSONSchema = SchemaFactory.createForClass(JSON);
