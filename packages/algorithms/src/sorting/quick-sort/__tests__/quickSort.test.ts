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

  const testingQuickSortTimeComplexity = testSortTimeComplexity<
    typeof quickSort,
    number
  >(quickSort);

  testingQuickSortTimeComplexity(sortedArray, 35);
  testingQuickSortTimeComplexity(notSortedArray, 35);
  testingQuickSortTimeComplexity(reverseArray, 35);
  testingQuickSortTimeComplexity(equalArray, 31);
  testingQuickSortTimeComplexity(negativeArray, 31);
});
