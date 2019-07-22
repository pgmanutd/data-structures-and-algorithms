import { noop } from '@data-structures-and-algorithms/utils';

import sort from '../sort';

describe('#sort', () => {
  test.each`
    sorter       | extraArgs                  | args            | calledWith
    ${jest.fn()} | ${undefined}               | ${[10, 20]}     | ${[[10, 20], { captureFnCall: noop }]}
    ${jest.fn()} | ${{}}                      | ${[10, 20, 30]} | ${[[10, 20, 30], { captureFnCall: noop }]}
    ${jest.fn()} | ${{ captureFnCall: noop }} | ${[10, 20, 40]} | ${[[10, 20, 40], { captureFnCall: noop }]}
  `(
    'should call $sorter with $calledWith when $args and $extraArgs are passed',
    ({ sorter, extraArgs, args, calledWith }) => {
      sort(sorter)(extraArgs)(args);

      expect(sorter).toHaveBeenCalledWith(...calledWith);
    },
  );
});
