export const ErrorMessageInput = {
  inputValid: (name: string): string => `${name} no válido.`,
  inputRequire: (name: string): string => `${name} es requerido.`,
  passwordDoNotMatch: 'La contraseña no coincide',
  max: (max: number): string => `Máximo ${max} cáracteres.`,
};
