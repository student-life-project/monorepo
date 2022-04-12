import { IAddress } from './Addres';
import { ICharacteristic } from './Characteristic.type';
import { IImage } from './Image.type';
import { IRule } from './Rule.type';
import { IService } from './Service.type';

export interface IRentalPlace {
  id?: string;
  title: string;
  address: IAddress;
  price: number;
  service: IService[];
  characteristics: ICharacteristic[];
  rules: IRule[];
  images: IImage[];
  likes: number;
  availabe: boolean;
  approved: boolean;
}

export const Reason = [
  { 'Quiero rentar': 'Quiero rentar' },
  { 'Busco roomie': 'Busco roomie' },
];

export const TypeSpace = [
  { 'Lugar completo': 'Lugar completo' },
  { 'Cuarto privado': 'Cuarto privado' },
  { 'Cuarto compartido': 'Cuarto compartido' },
  { Otro: 'Otro' },
];

export const Gender = [
  { Hombre: 'Hombre' },
  { Mujer: 'Mujer' },
  { 'Non-binary': 'Non-binary' },
  { 'Sin preferencia': 'Sin preferencia' },
];

export const orderRentals = [
  {
    'Mejor calificación': 'Mejor calificación',
  },
  {
    'Menor precio': 'Menor precio',
  },
  {
    'Mayor precio': 'Mayor precio',
  },
];
