import rotateArray from '../rotateArray';

describe('#rotateArray', () => {
  test.each`
    array                 | index | output
    ${[1, 2, 3, 4, 5, 6]} | ${3}  | ${[4, 5, 6, 1, 2, 3]}
    ${[1, 2, 3, 4, 5, 6]} | ${0}  | ${[1, 2, 3, 4, 5, 6]}
    ${[1, 2, 3, 4, 5, 6]} | ${8}  | ${[1, 2, 3, 4, 5, 6]}
    ${[1, 2, 3, 4, 5, 6]} | ${1}  | ${[2, 3, 4, 5, 6, 1]}
    ${[1, 2, 3, 4, 5, 6]} | ${5}  | ${[6, 1, 2, 3, 4, 5]}
    ${[1, 2, 3, 4, 5, 6]} | ${-1} | ${[6, 1, 2, 3, 4, 5]}
  `(
    'returns $output for passed $array and $index',
    ({ array, index, output }) => {
      expect(rotateArray(index)(array)).toEqual(output);
    },
  );
});
