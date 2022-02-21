export interface IAddress {
  id?: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export const States = [
  { Aguascalientes: 'Aguascalientes' },
  { 'Baja California': 'Baja California' },
  { 'Baja California Sur': 'Baja California Sur' },
  { Chihuahua: 'Chihuahua' },
  { Chiapas: 'Chiapas' },
  { Campeche: 'Campeche' },
  { 'Ciudad De México': 'Ciudad De México' },
  { Coahuila: 'Coahuila' },
  { Colima: 'Colima' },
  { Durango: 'Durango' },
  { Guerrero: 'Guerrero' },
  { Guanajuato: 'Guanajuato' },
  { Hidalgo: 'Hidalgo' },
  { Jalisco: 'Jalisco' },
  { Michoacan: 'Michoacan' },
  { 'Estado De México': 'Estado De México' },
  { Morelos: 'Morelos' },
  { Nayarit: 'Nayarit' },
  { 'Nuevo León': 'Nuevo León' },
  { Oaxaca: 'Oaxaca' },
  { Puebla: 'Puebla' },
  { 'Quintana Roo': 'Quintana Roo' },
  { Queretaro: 'Queretaro' },
  { Sinaloa: 'Sinaloa' },
  { 'San Luis Potosí': 'San Luis Potosí' },
  { Sonora: 'Sonora' },
  { Tabasco: 'Tabasco' },
  { Tlaxcala: 'Tlaxcala' },
  { Tamaulipas: 'Tamaulipas' },
  { Veracruz: 'Veracruz' },
  { Yucatan: 'Yucatan' },
  { Zacatecas: 'Zacatecas' },
];
