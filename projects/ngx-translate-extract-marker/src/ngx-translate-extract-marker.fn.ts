export function marker<T extends string | string[]>(key: T, context?: string): T {
  return key;
}
