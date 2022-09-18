import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty()
  filename: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  mimetype: string;

  @ApiProperty()
  fullpath: string;

  @ApiProperty()
  size: number;

  @ApiPropertyOptional()
  placeId?: string;
}
