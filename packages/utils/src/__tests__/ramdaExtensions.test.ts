import { mapIndexed, filterIndexed, noop } from '../ramdaExtensions';

describe('#ramdaExtensions', () => {
  describe('#mapIndexed', () => {
    test.each`
      array              | output
      ${[1, 2, 3, 4, 5]} | ${['1-0-index', '2-1-index', '3-2-index', '4-3-index', '5-4-index']}
    `('returns $output for passed $array', ({ array, output }) => {
      expect(
        mapIndexed((element, index) => `${element}-${index}-index`)(array),
      ).toEqual(output);
    });
  });

  describe('#filterIndexed', () => {
    test.each`
      array              | output
      ${[1, 2, 3, 4, 5]} | ${[1, 3, 5]}
    `('returns $output for passed $array', ({ array, output }) => {
      expect(filterIndexed((_, index) => index % 2 === 0)(array)).toEqual(
        output,
      );
    });
  });

  describe('#noop', () => {
    test.each`
      output
      ${undefined}
    `('returns $output when called', ({ output }) => {
      expect(noop()).toEqual(output);
    });
  });
});
