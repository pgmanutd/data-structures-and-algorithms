/**
 * Given an array, rotate the array to the left by k steps, where k is non-negative.
 *
 * Example:
 *
 *  Input: [1, 2, 3, 4, 5, 6] and k = 3
 *
 *  Output: [4, 5, 6, 1, 2, 3]
 *
 *  Explanation:
 *    rotate 1 steps to the left: [2, 3, 4, 5, 6, 1]
 *    rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]
 *    rotate 3 steps to the left: [4, 5, 6, 1, 2, 3]
 *
 * Reference: https://www.geeksforgeeks.org/array-rotation/
 */

import * as R from 'ramda';

const rotateArray = R.curry((index: number, array: any[]) => [
  ...array.slice(index),
  ...array.slice(0, index),
]);
/**
 * Complexity:
 * Time Complexity: O(n)
 */

export default rotateArray;
