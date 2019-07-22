import { noop } from '@data-structures-and-algorithms/utils';

const sort = <T extends Function, U>(sorter: T) => ({
  captureFnCall = noop,
} = {}) => (...args: U[]) => sorter(...args, { captureFnCall });

export default sort;
