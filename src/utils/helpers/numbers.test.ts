import { getPositiveNumber } from './numbers';

describe('getPositiveNumber', () => {
  it('should return a number when a positive numeric string is passed', () => {
    expect(getPositiveNumber('100')).toBe(100);
    expect(getPositiveNumber('100qwe')).toBe(100);
  });

  it('should return undefined when a negative numeric string is passed', () => {
    expect(getPositiveNumber('-100')).toBeUndefined();
    expect(getPositiveNumber('-100qwe')).toBeUndefined();
  });

  it('should return undefined when a non-numeric string is passed', () => {
    expect(getPositiveNumber('Not a number')).toBeUndefined();
  });
});
