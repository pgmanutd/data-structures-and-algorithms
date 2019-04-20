import rotateMatrixBy180Degree from '../rotateMatrixBy180Degree';

describe('#rotateMatrixBy180Degree', () => {
  test.each`
    array                                                       | output
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}                        | ${[[9, 8, 7], [6, 5, 4], [3, 2, 1]]}
    ${[[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 1, 2], [3, 4, 5, 6]]} | ${[[6, 5, 4, 3], [2, 1, 0, 9], [8, 7, 6, 5], [4, 3, 2, 1]]}
  `('returns $output for passed $array', ({ array, output }) => {
    expect(rotateMatrixBy180Degree(array)).toEqual(output);
  });
});
