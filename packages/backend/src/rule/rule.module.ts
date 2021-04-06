import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Rule, RuleSchema } from './rule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rule.name, schema: RuleSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Rule.name, schema: RuleSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class RuleModule {}
