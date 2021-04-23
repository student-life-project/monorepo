export interface IUser {
  firstName: string;
}

export interface ILoginResponse {
  token: string;
  expiration: Date | string;
}

export interface INavBar {
  allowPublish?: boolean;
  allowRegister?: boolean;
  allowLogin?: boolean;
  allowRequest?: boolean;
  isLogedIn?: boolean;
}
