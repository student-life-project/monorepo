export interface IMessage {
  id?: string;
  from: string;
  to: string;
  body: string;
  createdAt: Date | string;
}
