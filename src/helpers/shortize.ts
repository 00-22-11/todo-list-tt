export const shortize = (str: string) =>
  str.length > 10 ? `${str.slice(0, 10)}...` : str;
