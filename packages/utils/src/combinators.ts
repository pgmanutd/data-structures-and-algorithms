/**
 * References:
 * 1. https://docs.rs/aviary/0.1.1/aviary
 * 2. https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45
 * 3. https://github.com/fantasyland/fantasy-birds
 */

export const I = <T1>(x: T1) => x;

// @ts-ignore: no-unused-vars
// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export const K = <T1, T2>(x: T1) => (y: T2) => x;

export const A = <T1, R>(f: (x: T1) => R) => (x: T1) => f(x);

export const T = <T1, R>(x: T1) => (f: (x: T1) => R) => f(x);

export const V = <T1, T2, R>(x: T1) => (y: T2) => (
  f: (x: T1) => (y: T2) => R,
) => f(x)(y);

export const W = <T1, R>(f: (x: T1) => (x: T1) => R) => (x: T1) => f(x)(x);

export const C = <T1, T2, R>(f: (y: T2) => (x: T1) => R) => (x: T1) => (
  y: T2,
) => f(y)(x);

export const B = <T1, R1, R2>(f: (r1: R1) => R2) => (g: (x: T1) => R1) => (
  x: T1,
) => f(g(x));

export const B1 = <T1, T2, R1, R2>(f: (r1: R1) => R2) => (
  g: (x: T1) => (y: T2) => R1,
) => (x: T1) => (y: T2) => f(g(x)(y));

export const B2 = <T1, T2, T3, R1, R2>(f: (r1: R1) => R2) => (
  g: (x: T1) => (y: T2) => (z: T3) => R1,
) => (x: T1) => (y: T2) => (z: T3) => f(g(x)(y)(z));

export const S = <T1, R1, R2>(f: (x: T1) => (r1: R1) => R2) => (
  g: (x: T1) => R1,
) => (x: T1) => f(x)(g(x));

export const P = <T1, T2, R1, R2, R3>(f: (r1: R1) => (r2: R2) => R3) => (
  g: ((x: T1) => R1) & ((y: T2) => R2),
) => (x: T1) => (y: T2) => f(g(x))(g(y));

export const Y = <T1, R1, R2>(f: (r1: R1) => (x: T1) => R2) =>
  ((g: Function) => g(g))((h: (h: Function) => R1) => (x: T1) => f(h(h))(x));
