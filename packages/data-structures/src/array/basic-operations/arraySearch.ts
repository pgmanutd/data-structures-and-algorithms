import * as R from 'ramda';

export const arraySearchByIndex = (index: number) => R.path([index]);
/**
 * Complexity:
 * Time Complexity: O(1)
 */

export const arraySearchByValue = (element: any) => R.find(R.equals(element));
/**
 * Complexity:
 * Time Complexity: O(n)
 */
