export declare class PromiseSingletonMap
{
  run<T>(key: string, fn: () => Promise<T>): Promise<T>;
}
