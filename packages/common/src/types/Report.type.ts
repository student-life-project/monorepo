export interface IReport {
  id?: string;
  reporterId: string;
  description: string;
  type: string;
  createdAt: string | Date;
}

export const PlaceReport = [
  { 'Es impreciso o incorrecto': 'Es impreciso o incorrecto' },
  { 'No es un alojamiento real': 'No es un alojamiento real' },
  { 'Es una estafa': 'Es una estafa' },
  { 'Es ofensivo': 'Es ofensivo' },
  { 'Es otra cosa': 'Es otra cosa' },
];
