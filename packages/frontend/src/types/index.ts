import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { EUserType, IUser } from '@student_life/common';

export interface ILoginResponse {
  token: string;
  expiration: Date | string;
  userId: string;
}

export interface IRegisterResponse {
  token: string;
  expiration: Date | string;
  userId: string;
  userData: IUser;
}

export interface INavBar {
  allowRental?: boolean;
  allowLoginRegister?: boolean;
  allowRequest?: boolean;
  isLogedIn?: boolean;
  onLogoutClick: () => void;
  user?: IUser;
}

export interface IQueryCommonFilters {
  limit?: number;
  orderBy?: string;
}

export interface IQuestionAnswer {
  question: string;
  answer: string;
}

export interface IBreadCrumb {
  link: string;
  text: string;
}

export interface IInfoStep {
  title: string;
  text: string;
  icon: FontAwesomeIconProps['icon'];
}

export interface IStep {
  title: string;
  icon: FontAwesomeIconProps['icon'];
  completed: boolean;
}

export interface Itab {
  tab: number;
  text: string;
  handleTab: (tabCurrent: number) => void;
}

export interface IOption {
  [key: string]: any;
}

export interface IFilters {
  adType: IOption[];
  reason: IOption[];
  gender: IOption[];
  services: IOption[];
  rules: IOption[];
  security: IOption[];
}

export type TStatus = 'success' | 'warning' | 'error' | 'info';

export type TElementId = number | string | string[] | null | undefined;

export type TImages = string[];

export type TTooltipType =
  | 'dark'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'light';

export type TFile = File & {
  id?: string | number;
  url?: string | any;
};

export type TReportType = 'Usuario' | 'Publicación';

export interface IUserAuth0 {
  'https://student-life-auth-api/roles': [EUserType];
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
}

export interface IImage {
  _id: string;
  name: string;
  location: string;
  url: string;
  __v: number;
}

export type TCoordinate = [number, number];

export interface ILocationType {
  coordinates: TCoordinate;
}
export interface ILocation {
  type: ILocationType;
}

export interface IAddress {
  location: ILocation;
  ownerId: any | null;
  placeId: any | null;
  country: string;
  countryCode: string;
  state: string;
  _id: string;
  street: string;
  city: string;
  postalCode: string;
  __v: number;
}

export interface IRentalPlace {
  reports: any[];
  comments: any[];
  approved: boolean;
  likes: any[];
  images: IImage[];
  security: any[];
  rules: string[];
  services: any[];
  availability: boolean;
  _id: string;
  availabe: boolean;
  scores: any[];
  title: string;
  address: IAddress;
  price: string;
  __v: number;
  characteristics: string[];
  service: string[];
}
