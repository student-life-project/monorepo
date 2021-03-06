import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { IUser } from '@student_life/common';

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
  allowRegister?: boolean;
  allowLogin?: boolean;
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
  text: string;
  handleTab: (tabCurrent: number) => void;
}
