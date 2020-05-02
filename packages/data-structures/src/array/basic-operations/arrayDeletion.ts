import * as R from 'ramda';

import { filterIndexed } from '@data-structures-and-algorithms/utils';

// Solution 1
export const arrayDeletionUsingSlice = R.curry(
  (index: number, array: any[]) => [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ],
);
/**
 * Complexity:
 * Time Complexity: O(n)
 */

// Solution 2
export const arrayDeletionUsingFilter = (index: number) =>
  filterIndexed(R.compose(R.complement(R.equals(index)), R.nthArg(1)));
/**
 * Complexity:
 * Time Complexity: O(n)
 */

// Solution 3
// Using R.remove
