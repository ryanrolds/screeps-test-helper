import { pathToString } from './pathToString';

describe('pathToString', () => {

  it('works for objects with no nesting', () => {
    expect(pathToString(['name'])).toEqual('name');
    expect(pathToString(['name with spaces'])).toEqual('["name with spaces"]');
  });

});
