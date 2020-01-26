import squareOfSums from './squareOfSums'

it('gives the square of sums when given a number', () => {
  expect(squareOfSums(10)).toEqual(3025);
  expect(squareOfSums(99)).toEqual(24502500);
  expect(squareOfSums(100)).toEqual(25502500);
});
