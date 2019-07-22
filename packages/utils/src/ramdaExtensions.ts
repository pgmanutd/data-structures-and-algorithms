import * as R from 'ramda';

export const mapIndexed = R.addIndex(R.map);

export const filterIndexed = R.addIndex(R.filter);

export const noop = R.always(undefined);
