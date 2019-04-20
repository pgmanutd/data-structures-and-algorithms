interface DynamicObject {
  [key: string]: any;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  Exclude<keyof T, keyof T1>
>;

type Flatten<T> = T extends Array<infer U> ? U : T;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
};

type valueof<T> = T[keyof T];
