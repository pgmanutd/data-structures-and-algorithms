/**
 * Given a square matrix the task is that we turn it by 180 degrees in anti-clockwise direction.
 *
 * Example:
 *
 *  Input:
 *    1  2  3
 *    4  5  6
 *    7  8  9
 *
 *  Output:
 *    9  8  7
 *    6  5  4
 *    3  2  1
 *
 * Reference: https://www.geeksforgeeks.org/rotate-matrix-180-degree/
 */

import * as R from 'ramda';

const rotateMatrixBy180Degree = R.compose<any[], any[], any[]>(
  R.map(R.reverse),
  R.reverse,
);
/**
 * Complexity:
 * Time Complexity: O(N * M), N is number of rows and M is number of columns
 */

export default rotateMatrixBy180Degree;
