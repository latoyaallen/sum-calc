import getDifference from './getDifference'


it('subtracts two numbers', () => {
  expect(getDifference(11, 10)).toEqual(1);
  expect(getDifference(99, 9)).toEqual(90);
  expect(getDifference(100, 5)).toEqual(95);
});
