export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;

export type ArrayElement<T> = T extends (infer U)[] ? U : never;
