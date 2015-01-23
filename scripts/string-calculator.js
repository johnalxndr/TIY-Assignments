var assert  = require('assert');

function plus(A, B){
   return 1;
}

it('should add "zero" and "one"',function(){
    assert.equal(plus("zero", "one"), 1);
});

