import * as R from 'ramda';

type QuickSort = (array: number[]) => number[];
const quickSort: QuickSort = R.curry<QuickSort>(array => {
  if (!R.length(array)) {
    return [];
  }

  const [less, more] = R.partition(R.gt(R.head(array)), R.tail(array));

  return R.flatten([
    quickSort(less),
    R.head(array),
    quickSort(more),
  ]) as number[];
});
/**
 * Complexity:
 * Time Complexity: O(n log(n))
 */

export default quickSort;
