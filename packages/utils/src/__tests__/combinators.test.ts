import * as R from 'ramda';

import { I, K, A, T, V, W, C, B, B1, B2, S, P, Y } from '../combinators';

describe('#combinators', () => {
  describe('#I', () => {
    test.each`
      x     | output
      ${10} | ${10}
    `('returns $output for passed $x', ({ x, output }) => {
      expect(I(x)).toEqual(output);
    });
  });

  describe('#K', () => {
    test.each`
      x     | y     | output
      ${10} | ${20} | ${10}
    `('returns $output for passed $x, $y', ({ x, y, output }) => {
      expect(K(x)(y)).toEqual(output);
    });
  });

  describe('#A', () => {
    test.each`
      f            | x     | output
      ${R.add(10)} | ${10} | ${20}
    `('returns $output for passed $f, $x', ({ f, x, output }) => {
      expect(A(f)(x)).toEqual(output);
    });
  });

  describe('#T', () => {
    test.each`
      x     | f            | output
      ${10} | ${R.add(10)} | ${20}
    `('returns $output for passed $x, $f', ({ x, f, output }) => {
      expect(T(x)(f)).toEqual(output);
    });
  });

  describe('#V', () => {
    test.each`
      x     | y     | f           | output
      ${10} | ${20} | ${R.divide} | ${0.5}
    `('returns $output for passed $x, $y, $f', ({ x, y, f, output }) => {
      expect(V(x)(y)(f)).toEqual(output);
    });
  });

  describe('#W', () => {
    test.each`
      f             | x     | output
      ${R.multiply} | ${10} | ${100}
    `('returns $output for passed $f, $x', ({ f, x, output }) => {
      expect(W(f)(x)).toEqual(output);
    });
  });

  describe('#C', () => {
    test.each`
      f           | x     | y     | output
      ${R.divide} | ${10} | ${20} | ${2}
    `('returns $output for passed $f, $x, $y', ({ f, x, y, output }) => {
      expect(C(f)(x)(y)).toEqual(output);
    });
  });

  describe('#B', () => {
    test.each`
      f                 | g            | x     | output
      ${R.multiply(10)} | ${R.add(20)} | ${10} | ${300}
    `('returns $output for passed $f, $g, $x', ({ f, g, x, output }) => {
      expect(B(f)(g)(x)).toEqual(output);
    });
  });

  describe('#B1', () => {
    test.each`
      f                 | g        | x     | y     | output
      ${R.multiply(10)} | ${R.add} | ${10} | ${20} | ${300}
    `('returns $output for passed $f, $g, $x, $y', ({ f, g, x, y, output }) => {
      expect(B1(f)(g)(x)(y)).toEqual(output);
    });
  });

  describe('#B2', () => {
    test.each`
      f                 | g                    | x     | y     | z     | output
      ${R.multiply(10)} | ${R.thunkify(R.add)} | ${10} | ${20} | ${30} | ${300}
    `(
      'returns $output for passed $f, $g, $x, $y, $z',
      ({ f, g, x, y, z, output }) => {
        expect(B2(f)(g)(x)(y)(z)).toEqual(output);
      },
    );
  });

  describe('#S', () => {
    test.each`
      f             | g            | x     | output
      ${R.multiply} | ${R.add(10)} | ${10} | ${200}
    `('returns $output for passed $f, $g, $x', ({ f, g, x, output }) => {
      expect(S(f)(g)(x)).toEqual(output);
    });
  });

  describe('#P', () => {
    test.each`
      f             | g            | x     | y     | output
      ${R.multiply} | ${R.add(10)} | ${10} | ${20} | ${600}
    `('returns $output for passed $f, $g, $x, $y', ({ f, g, x, y, output }) => {
      expect(P(f)(g)(x)(y)).toEqual(output);
    });
  });

  describe('#Y', () => {
    test.each`
      f                                                                                | x    | output
      ${(fac: (n: number) => number) => (n: number) => (n === 0 ? 1 : n * fac(n - 1))} | ${5} | ${120}
    `('returns $output for passed $f, $x', ({ f, x, output }) => {
      expect(Y(f)(x)).toEqual(output);
    });
  });
});
