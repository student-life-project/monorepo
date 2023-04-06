import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  comment: string;

  @ApiPropertyOptional({})
  placeId: string;

  @ApiPropertyOptional({})
  ownerId: string;
}
