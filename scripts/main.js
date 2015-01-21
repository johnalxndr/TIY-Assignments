var assert = require('assert');

function add(a, b){
    return a + b;
};


function diff(A, B){
   return A - B;
};


function prod(A, B){
  return A * B;
}


function div(A, B){
   return A / B    
}


assert.equal(add(2, 4), 6);

assert.equal(diff(10, 9), 1);

assert.equal(prod(5, 5), 25);

assert.equal(div(10, 5), 2);

