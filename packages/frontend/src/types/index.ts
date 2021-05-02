import type { IUser } from '@student_life/common';

export interface ILoginResponse {
  token: string;
  expiration: Date | string;
  userId: string;
}

export interface INavBar {
  allowPublish?: boolean;
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
