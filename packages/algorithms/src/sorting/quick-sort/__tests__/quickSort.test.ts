import {
  testSort,
  testSortTimeComplexity,
  sortedArray,
  notSortedArray,
  reverseArray,
  equalArray,
  negativeArray,
} from '@data-structures-and-algorithms/algorithms/sorting/utils';

import quickSort from '../quickSort';

describe('#quickSort', () => {
  testSort<typeof quickSort>(quickSort);

  const testQuickSortTimeComplexity = testSortTimeComplexity<
    typeof quickSort,
    number
  >(quickSort);

  testQuickSortTimeComplexity(sortedArray, 35);
  testQuickSortTimeComplexity(notSortedArray, 35);
  testQuickSortTimeComplexity(reverseArray, 35);
  testQuickSortTimeComplexity(equalArray, 31);
  testQuickSortTimeComplexity(negativeArray, 31);
});
