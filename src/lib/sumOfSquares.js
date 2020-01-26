const sumOfSquares = (num) =>{
  const array = Array.from(Array(num + 1).keys());
  let sum = 0,
    i = array.length;
  while (i--) {
    sum += Math.pow(array[i], 2);
  }return sum;
}

export default sumOfSquares;


// The sum of the squares of the first ten natural numbers is:
// 1^2 + 2^2 + ... + 10^2 = 385
