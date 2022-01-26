export interface IReport {
  id?: string;
  reporterId: string;
  description: string;
  type: string;
  createdAt: string | Date;
}

export enum EReportPlace {
  INCORRECT_INFO,
  IT_IS_NOT_REAL,
  IT_IS_FRAUD,
  IT_IS_OFFENSIVE,
  OTHER,
}
