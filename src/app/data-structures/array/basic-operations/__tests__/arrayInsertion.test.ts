import { arrayInsertionUsingSlice } from '../arrayInsertion';

describe('#arrayInsertion', () => {
  describe('#arrayInsertionUsingSlice', () => {
    test.each`
      array              | element | index | output
      ${[1, 2, 4, 5, 6]} | ${3}    | ${2}  | ${[1, 2, 3, 4, 5, 6]}
    `(
      'returns $output for passed $array, $element and $index',
      ({ array, element, index, output }) => {
        expect(arrayInsertionUsingSlice(element, index)(array)).toEqual(output);
      },
    );
  });
});
