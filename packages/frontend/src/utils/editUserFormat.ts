import { TUser } from '@/types';

export const isBannedUserFormat = (data: TUser): TUser => ({
  ...data,
  isBanned: !data.isBanned,
});
