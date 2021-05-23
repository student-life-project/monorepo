import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Rule, RuleSchema } from './rule.schema';
import { RuleService } from './rule.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rule.name, schema: RuleSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Rule.name, schema: RuleSchema }]),
  ],
  controllers: [],
  providers: [RuleService],
})
export class RuleModule {}
