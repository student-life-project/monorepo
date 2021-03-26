import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Service, ServiceSchema } from './service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class ServiceModule {}
