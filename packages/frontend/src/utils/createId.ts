export const createId = (): string => {
  return (
    Math.floor(Math.random() * (0 - 1000 + 1) + 0) + new Date().getTime()
  ).toString();
};
