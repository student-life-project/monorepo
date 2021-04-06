import { IUser } from './User.type';
import { IRentalPlace } from './RentalPlace.type';

export interface IOwner extends IUser {
  propertyPlaces: IRentalPlace[];
}
