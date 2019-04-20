import { arraySearchByIndex, arraySearchByValue } from '../arraySearch';

describe('#arraySearch', () => {
  describe('#arraySearchByIndex', () => {
    test.each`
      array                 | index | output
      ${[1, 2, 3, 4, 5, 6]} | ${5}  | ${6}
      ${[1, 2, 3, 4, 5, 6]} | ${9}  | ${undefined}
    `(
      'returns $output for passed $array and $index',
      ({ array, index, output }) => {
        expect(arraySearchByIndex(index)(array)).toEqual(output);
      },
    );
  });

  describe('#arraySearchByValue', () => {
    test.each`
      array                 | element | output
      ${[1, 2, 3, 4, 5, 6]} | ${3}    | ${3}
      ${[1, 2, 3, 4, 5, 6]} | ${9}    | ${undefined}
    `(
      'returns $output for passed $array and $element',
      ({ array, element, output }) => {
        expect(arraySearchByValue(element)(array)).toEqual(output);
      },
    );
  });
});
