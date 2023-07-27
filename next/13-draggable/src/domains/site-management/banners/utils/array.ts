export const getSortedData = <T>(data: T[], callback: (a: T, b: T) => number) => {
  const sortedData = [...data];
  return sortedData.sort(callback);
}