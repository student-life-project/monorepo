import { IntersectionType } from '@nestjs/swagger';

import { AdditionalRentalPlaceInfoDto } from './additional-rental-place-info.dto';
import { CreateRentalPlaceDto } from './create-rental-place.dto';

export class UpdateRentalPlaceDto extends IntersectionType(
  CreateRentalPlaceDto,
  AdditionalRentalPlaceInfoDto,
) {}
