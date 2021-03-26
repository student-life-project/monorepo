export interface IReport {
  id?: string;
  reporterId: string;
  description: string;
  type: string;
  createdAt: string | Date;
}
