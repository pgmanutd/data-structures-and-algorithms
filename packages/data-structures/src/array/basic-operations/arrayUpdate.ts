import * as R from 'ramda';

import { mapIndexed } from '@data-structures-and-algorithms/utils';

// Solution 1
export const arrayUpdateUsingSlice = R.curry(
  (element: any, index: number, array: any[]) => [
    ...array.slice(0, index),
    element,
    ...array.slice(index + 1),
  ],
);
/**
 * Complexity:
 * Time Complexity: O(n)
 */

// Solution 2
export const arrayUpdateUsingMap = R.curry((element: any, index: number) =>
  mapIndexed(
    R.cond([
      [R.compose(R.equals(index), R.nthArg(1)), R.always(element)],
      [R.T, R.nthArg(0)],
    ]),
  ),
);
/**
 * Complexity:
 * Time Complexity: O(n)
 */

// Solution 3
// Using R.update
