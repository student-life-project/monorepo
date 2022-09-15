export interface IAuthRepository<T> {
  getUserData(): Promise<T>;
  validateToken(token: string): Promise<boolean>;
  renovateSesion(email: string): Promise<string>;
  logout(token: string): Promise<boolean>;
}
