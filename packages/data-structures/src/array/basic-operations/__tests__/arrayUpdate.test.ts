import { arrayUpdateUsingSlice, arrayUpdateUsingMap } from '../arrayUpdate';

describe('#arrayUpdate', () => {
  describe('#arrayUpdateUsingSlice', () => {
    test.each`
      array                 | element | index | output
      ${[1, 2, 3, 4, 5, 6]} | ${8}    | ${2}  | ${[1, 2, 8, 4, 5, 6]}
    `(
      'returns $output for passed $array, $element and $index',
      ({ array, element, index, output }) => {
        expect(arrayUpdateUsingSlice(element, index)(array)).toEqual(output);
      },
    );
  });

  describe('#arrayUpdateUsingMap', () => {
    test.each`
      array                 | element | index | output
      ${[1, 2, 3, 4, 5, 6]} | ${8}    | ${2}  | ${[1, 2, 8, 4, 5, 6]}
    `(
      'returns $output for passed $array, $element and $index',
      ({ array, element, index, output }) => {
        expect(arrayUpdateUsingMap(element, index)(array)).toEqual(output);
      },
    );
  });
});
