import { IImage } from './Image.type';
import { IMessage } from './Message.type';
import { IReport } from './Report.type';

export enum EUserType {
  ADMIN,
  STUDENT,
  OWNER,
}

export interface IUser {
  id?: string;
  firstName: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  password: string;
  messages?: IMessage[];
  photo?: IImage;
  type: EUserType;
  reports: IReport[];
}
