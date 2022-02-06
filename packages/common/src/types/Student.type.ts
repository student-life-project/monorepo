import { IRentalPlace } from './RentalPlace.type';
import { ISchool } from './School.type';
import { IUser } from './User.type';

export interface IStudent extends IUser {
  studentNumber: string;
  school: ISchool;
  rentalPlace: IRentalPlace;
}
