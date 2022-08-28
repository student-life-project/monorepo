import { IFetcherRepository } from '../fetcher/fetcher.repository.interface';
// import { IAuthRepository } from './auth.repository.interface';

export class AuthRepoitory<T> {
  // implements IAuthRepository<T> {
  constructor(private readonly fetcher: IFetcherRepository<T>) {
    if (this.fetcher === null) {
      throw new Error('');
    }
  }
}
