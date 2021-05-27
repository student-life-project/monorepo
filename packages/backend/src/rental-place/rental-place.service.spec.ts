// eslint-disable-next-line import/no-extraneous-dependencies
import { Test, TestingModule } from '@nestjs/testing';

import { RentalPlaceService } from './rental-place.service';

describe('RentalPlaceService', () => {
  let service: RentalPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalPlaceService],
    }).compile();

    service = module.get<RentalPlaceService>(RentalPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
