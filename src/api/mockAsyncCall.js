import getDifference from '../lib/getDifference';
import squareOfSums from '../lib/squareOfSums';
import sumOfSquares from '../lib/sumOfSquares';

const getSolution = (inputNumber) => {
  return getDifference(squareOfSums(inputNumber), sumOfSquares(inputNumber));
}

const mockAsyncCall = (request) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      switch(request.method){
        case 'get':
          const number = request.body.inputNumber;

          if(number && typeof number === 'number'){
            resolve( {
              statusText: "200 OK",
              ok: true,
              answer:
              {
                'datetime': new Date(),
                'solution': getSolution(number),
                'inputNumber': number,
                'occurrences': 0,
                'last_datetime': 'yesterday'
              }
            })
          } else {
            resolve( {
              statusText:"404 Not Found"
            })
          }
          break;
        default :
          resolve({
            statusText:'400 Bad Request'
          })
      }
    }, 300)
  })
}

export default mockAsyncCall;

// HTTP Codes
