import sumOfSquares from './sumOfSquares'

it('gives the sum of squares when given a number', () => {
  expect(sumOfSquares(10)).toEqual(385);
  expect(sumOfSquares(99)).toEqual(328350);
  expect(sumOfSquares(100)).toEqual(338350);
});
