import * as R from 'ramda';

import {
  EMPTY,
  array,
  getByIndex,
  length,
  range,
  map,
  realArray,
} from '../arrayCreation';

describe('#arrayCreation', () => {
  describe('#getByIndex', () => {
    test.each`
      arrayInput                                           | index | output
      ${array(10)(array(20)(array(30)(array(40)(EMPTY))))} | ${2}  | ${30}
      ${range(1, 4)}                                       | ${3}  | ${4}
      ${range(1, 4)}                                       | ${10} | ${undefined}
      ${range(1, 4)}                                       | ${-1} | ${undefined}
    `(
      'returns $output for passed $arrayInput and $index',
      ({ arrayInput, index, output }) => {
        expect(getByIndex(index)(arrayInput)).toEqual(output);
      },
    );
  });

  describe('#length', () => {
    test.each`
      arrayInput                                           | output
      ${array(10)(array(20)(array(30)(array(40)(EMPTY))))} | ${4}
      ${range(1, 7)}                                       | ${7}
    `('returns $output for passed $arrayInput', ({ arrayInput, output }) => {
      expect(length(arrayInput)).toEqual(output);
    });
  });

  describe('#map', () => {
    test.each`
      arrayInput                                           | index | output
      ${array(10)(array(20)(array(30)(array(40)(EMPTY))))} | ${2}  | ${300}
      ${range(1, 4)}                                       | ${3}  | ${40}
    `(
      'returns $output for passed $arrayInput and $index',
      ({ arrayInput, index, output }) => {
        expect(
          R.compose(getByIndex(index), map(R.multiply(10)))(arrayInput),
        ).toEqual(output);
      },
    );
  });

  describe('#realArray', () => {
    test.each`
      arrayInput                                           | output
      ${array(10)(array(20)(array(30)(array(40)(EMPTY))))} | ${[10, 20, 30, 40]}
      ${range(1, 7)}                                       | ${[1, 2, 3, 4, 5, 6, 7]}
    `('returns $output for passed $arrayInput', ({ arrayInput, output }) => {
      expect(realArray(arrayInput)).toEqual(output);
    });
  });
});
