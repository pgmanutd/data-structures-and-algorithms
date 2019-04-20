import * as R from 'ramda';

// Solution 1
export const arrayInsertionUsingSlice = R.curry(
  (element: any, index: number, array: any[]) => [
    ...array.slice(0, index),
    element,
    ...array.slice(index),
  ],
);
/**
 * Complexity:
 * Time Complexity: O(n)
 */

// Solution 2
// Using R.insert
