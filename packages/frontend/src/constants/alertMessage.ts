export const AlertMessage = {
  created: (action: string): string => `Sé ha creado ${action} exitosamente`,
  updated: (action: string): string =>
    `Sé ha actualizado ${action} exitosamente`,
  deleted: (action: string): string => `Sé ha eliminado ${action} exitosamente`,
};
