import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JSONModule } from './json/modules/JSONModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `infra/env-vars/${process.env.NODE_END || 'development'}.ini`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    JSONModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
