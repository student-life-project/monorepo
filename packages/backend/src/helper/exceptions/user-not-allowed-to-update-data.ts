import { UnauthorizedException } from '@nestjs/common';

export class UserNotAllowOrOwnerException extends UnauthorizedException {
  constructor() {
    super(
      'User not allowed to update data',
      'User is trying to modify data not owned by him',
    );
  }
}
