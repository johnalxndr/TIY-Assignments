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

}

function wordToNum(number){
    if(word=='zero'){
        return 0;
}else if(word=='one'){
        return 1;
}else if(word=='two'){
        return 2;
}else if(word=='three'){
        return 3;
}else if(word=='four'){
        return 4;
}else if (word=='five'){
    return 5;
}else if (word=='six'){
    return 6;
}else if (word=='seven'){
    return 7;
}else if (word=='eight'){
    return 8;
}else if (word=='nine'){
    return 9; 
}
}
function plus(A, B){
    return wordToNum(A) + wordToNum(B);

    assert(plus('two', 'three')==5);



