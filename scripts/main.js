var assert = require('assert');

function add(a, b){
    return a + b;
};
assert.equal(add(2, 4), 6);

function diff(A, B){
   return A - B;
};
assert.equal(diff(10, 9), 1);

function prod(A, B){
  return A * B;
}
assert.equal(prod(5, 5), 25);

function div(A, B){
   return A / B    
}
assert.equal(div(10, 5), 2);

if(5==5){
    console.log("cool")
};

if(1==2){
console.log("no-way");
} else{
console.log("thats wrong");
};





