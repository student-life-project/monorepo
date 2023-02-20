export interface IPagination<T> {
  count: number;
  current: number;
  limit: number;
  next?: number;
  prev?: number;
  data: T[];
}

export enum EOrder {
  asc = 'asc',
  desc = 'desc',
}

export interface IPaginationParams {
  from?: number;
  limit?: number;
  sortBy?: string;
  order?: EOrder;
}
