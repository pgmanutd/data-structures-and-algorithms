import {
  arrayDeletionUsingSlice,
  arrayDeletionUsingFilter,
} from '../arrayDeletion';

describe('#arrayDeletion', () => {
  const testCases = test.each`
    array                 | index | output
    ${[1, 2, 3, 4, 5, 6]} | ${2}  | ${[1, 2, 4, 5, 6]}
  `;

  describe('#arrayDeletionUsingSlice', () => {
    testCases(
      'returns $output for passed $array and $index',
      ({ array, index, output }) => {
        expect(arrayDeletionUsingSlice(index)(array)).toEqual(output);
      },
    );
  });

  describe('#arrayDeletionUsingFilter', () => {
    testCases(
      'returns $output for passed $array and $index',
      ({ array, index, output }) => {
        expect(arrayDeletionUsingFilter(index)(array)).toEqual(output);
      },
    );
  });
});
