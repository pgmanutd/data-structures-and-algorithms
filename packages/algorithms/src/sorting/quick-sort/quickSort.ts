import * as R from 'ramda';

import { sort } from '@data-structures-and-algorithms/algorithms/sorting/utils';

type QuickSort = (
  array: number[],
  { captureFnCall }: { captureFnCall: () => void },
) => number[];
const quickSort: QuickSort = R.curry<QuickSort>((array, { captureFnCall }) => {
  captureFnCall();

  if (!R.length(array)) {
    return [];
  }

  const [less, more] = R.partition(
    R.gt(R.head(array) as number),
    R.tail(array),
  );

  return R.flatten([
    quickSort(less, { captureFnCall }),
    R.head(array),
    quickSort(more, { captureFnCall }),
  ]) as number[];
});
/**
 * Complexity:
 * Time Complexity: O(n log(n))
 */

export default sort(quickSort);
