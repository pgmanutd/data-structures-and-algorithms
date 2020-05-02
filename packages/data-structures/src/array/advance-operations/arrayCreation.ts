import * as R from 'ramda';

import { I, K, V } from '@data-structures-and-algorithms/utils';

const head = K;
const tail = K(I);

export const EMPTY = () => undefined;
export const array = V;

type FN = typeof EMPTY & ((nestedFn: Function) => FN);

type GetByIndex = (index: number) => SearchFnForIndex;
type SearchFnForIndex = (fn: FN, memo?: number) => undefined | FN;
export const getByIndex: GetByIndex = R.curry((index: number) => {
  const searchFnForIndex: SearchFnForIndex = (fn, memo = index) => {
    if (fn === EMPTY) {
      return EMPTY();
    }

    if (memo === 0) {
      return fn(head);
    }

    return searchFnForIndex(fn(tail), memo - 1);
  };

  return searchFnForIndex;
});

type Length = (fn: FN) => number;
export const length: Length = R.curry((fn) =>
  fn === EMPTY ? 0 : 1 + length(fn(tail)),
);

type Range = (start: number, end: number, fn?: typeof EMPTY) => FN | Range;
export const range: Range = R.curry((start, end, fn = EMPTY) =>
  start > end ? fn : range(start, end - 1, array(end)(fn) as FN),
);

type Map = <T, U>(callbackfn: (value: T) => U) => MapWith;
type MapWith = (fn: FN) => FN;
export const map: Map = R.curry((callbackfn) => {
  const mapWith: MapWith = (fn: FN) =>
    fn === EMPTY
      ? fn
      : (R.compose(array, callbackfn, fn)(head)(
          R.compose(mapWith, fn)(tail),
        ) as FN);

  return mapWith;
});

type RealArray = <T>(fn: FN) => T[];
export const realArray: RealArray = R.curry((fn) =>
  fn === EMPTY ? [] : [fn(head), ...realArray(fn(tail))],
);
