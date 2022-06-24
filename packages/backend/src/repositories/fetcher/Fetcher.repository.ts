import axios, { AxiosInstance } from 'axios';

import { IFetcherRepository } from './fetcher.repository.interface';

export class FeetcherRepository<T> implements IFetcherRepository<T> {
  instance: AxiosInstance | null = null;

  constructor(private readonly baseURL: string) {
    this.instance = axios.create({ baseURL: this.baseURL });
  }

  get(url: string): Promise<T> {
    return axios.get<T>(url).then(({ data }) => data);
  }

  post(url: string, data: Record<string, any>): Promise<T> {
    return axios.post(url, data).then(({ data: responseData }) => responseData);
  }

  put(url: string, data: Record<string, any>): Promise<T> {
    return axios.put(url, data).then(({ data: responseData }) => responseData);
  }

  patch(url: string, data: Record<string, any>): Promise<T> {
    return axios
      .patch(url, data)
      .then(({ data: responseData }) => responseData);
  }

  delete(url: string): Promise<T> {
    return axios.delete<T>(url).then(({ data }) => data);
  }
}
