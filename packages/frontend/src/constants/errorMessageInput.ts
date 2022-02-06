export const ErrorMessageInput = {
  inputValid: (name: string): string => `${name} no válido.`,
  inputRequire: (name: string): string => `${name} es requerido.`,
  passwordDoNotMatch: 'La contraseña no coincide',
  max: (max: number): string => `Máximo ${max} cáracteres.`,
  maxNumber: (max: number): string => `Máximo ${max} cáracteres.`,
  minNumber: (min: number): string => `Mínimo ${min} dígitos.`,
  notNumber: 'No es un número válido.',
  priceValid: 'El número debe de ser mayor o igual a 1',
};
