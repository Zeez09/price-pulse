export const getRandomProducts = <T>(items: T[], count: number): T[] => {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
};
