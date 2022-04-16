export const CalculateAge = (date: string | number | Date): number => {
  const now = new Date();
  const birthDate = new Date(date);
  const month = now.getMonth() - birthDate.getMonth();
  let age = now.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
    age -= age;
  }

  return age;
};
