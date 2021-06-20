export const checkPageNumber = (page: number, loading: boolean) => {
  if (page > 1) return false;
  return loading;
};
