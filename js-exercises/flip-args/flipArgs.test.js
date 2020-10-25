import { flipArgs } from './flipArgs';

describe('Use flipArgs function', () => {
  test('It should reverse the arguments', () => {
    const flipped = flipArgs((args) => args);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });
});
