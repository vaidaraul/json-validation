import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JSON, JSONSchema } from '../models/JSONModel';
import { configJSONModuleProvider } from 'src/config/nest.config';
import { JSONController } from '../controllers/JSONController';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JSON.name, schema: JSONSchema }]),
  ],
  providers: configJSONModuleProvider,
  controllers: [JSONController],
})
export class JSONModule {}
