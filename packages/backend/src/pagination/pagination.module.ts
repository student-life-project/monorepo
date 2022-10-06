import { Module } from '@nestjs/common';

import { PaginationMoogooseService } from './Pagination.service';

@Module({
  providers: [PaginationMoogooseService],
  exports: [PaginationMoogooseService],
})
export class PaginationModule {}
