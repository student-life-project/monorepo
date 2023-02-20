import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { CreateRuleDto } from './dto/create-rule.dto';
// import { UpdateRuleDto } from './dto/update-rule.dto';
import { Rule, RuleDocument } from './rule.schema';

@Injectable()
export class RuleService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel(Rule.name)
    private RuleModel: Model<RuleDocument>,
  ) {}

  async createMany(createRuleDto: CreateRuleDto[]): Promise<Rule[]> {
    const createRules = await this.RuleModel.insertMany(createRuleDto);
    return createRules;
  }

  async findAll(query: FilterQuery<RuleDocument> = {}): Promise<Rule[]> {
    return this.RuleModel.find(query).exec();
  }
}
