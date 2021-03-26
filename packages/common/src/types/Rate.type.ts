export enum ERateType {
  PLACE,
  PLACE_OWNER,
}

export interface IRate {
  id?: string;
  score: number;
  owerId: string;
  type: ERateType;
  placeId?: string;
  placeOwnerId?: string;
}
