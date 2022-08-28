export interface IFetcherRepository<T> {
  get(url: string): Promise<T>;
  post(url: string, data: Record<string, any>): Promise<T>;
  put(url: string, data: Record<string, any>): Promise<T>;
  patch(url: string, data: Record<string, any>): Promise<T>;
  delete(url: string): Promise<T>;
}
