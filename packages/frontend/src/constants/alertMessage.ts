export const AlertMessage = {
  created: (action: string): string => `Sé ha creado ${action} exitosamente`,
  updated: (action: string): string =>
    `Sé ha actualizado ${action} exitosamente`,
  deleted: (action: string): string => `Sé ha eliminado ${action} exitosamente`,
  loaded: (action: string): string => `Sé ha subido ${action} exitosamente`,
  'file-invalid-type': 'El tipo de archivo debe ser .jpg, .jpeg, .png',
};
