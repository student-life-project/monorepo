// eslint-disable-next-line import/no-extraneous-dependencies
import { Test, TestingModule } from '@nestjs/testing';

import { RentalPlaceController } from './rental-place.controller';

describe('RentalPlaceController', () => {
  let controller: RentalPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalPlaceController],
    }).compile();

    controller = module.get<RentalPlaceController>(RentalPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
