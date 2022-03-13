export const scrollTo = (): void => window.scrollTo(0, 0);

export const ScrollToAnimation = (): void => {
  window.scroll({ top: 0, behavior: 'smooth' });
};
