import { IImage } from './Image.type';
import { IMessage } from './Message.type';
import { IReport } from './Report.type';

export enum EUserType {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  OWNER = 'OWNER',
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
  role: EUserType;
  reports: IReport[];
}

export const ProfileReport = [
  {
    'Es irrespetuoso u ofensivo (Incita al odio)':
      'Es irrespetuoso u ofensivo (Incita al odio)',
  },
  {
    'Es un perfil con información falsa': 'Es un perfil con información falsa',
  },
  {
    'Amenazar con violencia o daño físico':
      'Amenazar con violencia o daño físico',
  },
  { 'Comportamiento inapropiado': 'Comportamiento inapropiado' },
  { 'Es otra cosa': 'Es otra cosa' },
];
