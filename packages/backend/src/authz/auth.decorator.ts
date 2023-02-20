import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { PermissionsGuard } from './permissions.guard';

export function Auth(...permissions: string[]) {
  return applyDecorators(
    UseGuards(AuthGuard('jwt'), PermissionsGuard),
    SetMetadata('permissions', permissions),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
