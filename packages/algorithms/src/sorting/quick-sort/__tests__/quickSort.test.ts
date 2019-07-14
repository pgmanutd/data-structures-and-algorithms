import { testSort } from '@data-structures-and-algorithms/algorithms/sorting/utils';

import quickSort from '../quickSort';

describe('#quickSort', () => {
  testSort<typeof quickSort>(quickSort);
});
