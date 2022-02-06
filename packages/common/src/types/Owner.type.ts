import { IRentalPlace } from './RentalPlace.type';
import { IUser } from './User.type';

export interface IOwner extends IUser {
  propertyPlaces: IRentalPlace[];
}
