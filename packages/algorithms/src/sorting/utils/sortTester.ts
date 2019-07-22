export const sortedArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  9,
  10,
  11,
  12,
  13,
  14,
  14,
  15,
];
export const notSortedArray = [
  14,
  1,
  3,
  6,
  12,
  9,
  11,
  13,
  7,
  5,
  14,
  10,
  4,
  9,
  15,
  8,
  2,
];
export const reverseArray = [
  15,
  14,
  14,
  13,
  12,
  11,
  10,
  9,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];
export const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const negativeArray = [
  -3,
  0,
  1,
  -10,
  40,
  -20,
  4,
  -3,
  -7,
  10,
  2,
  -100,
  100,
  12,
  0,
];

export const testSort = <T extends Function>(sorter: T) => {
  describe('#testSort', () => {
    test.each`
      array             | output
      ${sortedArray}    | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 14, 15]}
      ${notSortedArray} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 14, 15]}
      ${reverseArray}   | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 14, 15]}
      ${equalArray}     | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
      ${negativeArray}  | ${[-100, -20, -10, -7, -3, -3, 0, 0, 1, 2, 4, 10, 12, 40, 100]}
    `('returns $output for passed $array', ({ array, output }) => {
      expect(sorter()(array)).toEqual(output);
    });
  });
};

export const testSortTimeComplexity = <T extends Function, U>(sorter: T) => (
  array: U[],
  numberOfCalls: number,
) => {
  describe('#testSortTimeComplexity', () => {
    it(`should call #${sorter.toString()} #${numberOfCalls} times with input #${array}`, () => {
      const captureFnCall = jest.fn();

      sorter({ captureFnCall })(array);

      expect(captureFnCall).toHaveBeenCalledTimes(numberOfCalls);
    });
  });
};
