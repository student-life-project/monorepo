import { IAddress } from './Addres';
import { ICharacteristic } from './Characteristic.type';
import { IImage } from './Image.type';
import { IRate } from './Rate.type';
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
  scores: IRate[];
  availabe: boolean;
  approved: boolean;
}
