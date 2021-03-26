import { ISchool } from './School.type';
import { IUser } from './User.type';
import { IRentalPlace } from './RentalPlace.type';

export interface IStudent extends IUser {
  studentNumber: string;
  school: ISchool;
  rentalPlace: IRentalPlace;
}
