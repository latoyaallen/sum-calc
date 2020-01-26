const squareOfSums = (num) =>{
  const array = Array.from(Array(num + 1).keys());
  const sum = array.reduce(function(acc, val) { return acc + val; }, 0)
  return sum ** 2;
}

export default squareOfSums;

// The square of the sum of the first ten natural numbers is:

// (1 + 2 + ... + 10)^2 = 552 = 3025
