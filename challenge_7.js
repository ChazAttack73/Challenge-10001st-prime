function primeFinder( index ) {
  //this.index = index;  //nth prime number to find
  var i;  //starting point of numbers to check
  var primeNum = [2, 3];  //array of first two primes
  var n = 5;

  //PrimeFinder.prototype.getPrimeNumber = function( n ) {
  function isPrime( n ) {
    var i = 1;
    var primes = primeNum[i];
    var limit = Math.ceil( Math.sqrt( n ) );

    while( primes <= limit ) {
      if( n % primes === 0 ) {
        return false;
      }
      i += 1;
      primes = primeNum[i];
    }
    return true;
  }

  for( i = 2; i <= index; i += 1 ) {
    while ( !isPrime( n )) {
      n += 2;
    }
    primeNum.push( n );
    n += 2;
  }
  return primeNum[ index - 1 ];
}

console.log(primeFinder(10001));