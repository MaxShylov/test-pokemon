import { capitalize } from './text';

describe('capitalize', () => {
  it('should capitalize the first letter and makes all other letters lowercase', () => {
    expect(capitalize('word')).toEqual('Word');
    expect(capitalize('Word')).toEqual('Word');
    expect(capitalize('WORD')).toEqual('Word');
    expect(capitalize('w')).toEqual('W');
  });

  it('should return an empty string if input is an empty string', () => {
    expect(capitalize('')).toEqual('');
  });
});
