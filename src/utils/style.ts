export function px2vw(size: number, width = 1440): string {
  return `${(size / width) * 100}vw`;
}
