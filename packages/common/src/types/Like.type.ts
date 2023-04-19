import { ERateType } from './Rate.type';

export interface ILike {
  _id?: string;
  type: ERateType;
  ownerId: string;
  placeId: string;
  liked?: boolean;
}
