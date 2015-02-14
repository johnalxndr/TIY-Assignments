var assert = require('assert');
var _ = require('lodash');


    var numbers = {
        "zero": 0,
        "one": 1,
        "two": 2,
		"three": 3,
		"four": 4,
		"five": 5,
		"six": 6,
		"seven": 7,
		"eight": 8,
		"nine": 9,
		"ten": 10,
		"eleven": 11,
		"twelve": 12,
		"thirteen": 13,
		"fourteen": 14,
		"fifteen": 15,
		"sixteen": 16,
		"seventeen": 17,
		"eightteen": 18,
		"nineteen": 19,
		"twenty": 20,
        "thirty": 30,
        "fifty": 50,
        "sixty": 60,
        "ninety": 90,
        "hundred": 100
    };

function plus (A, B){
return numbers [A] + numbers [B];
    };

function minus (A, B){
return numbers [A] - numbers [B];
};

function multiply (A, B){
    return numbers [A] * numbers [B];
};



    
    
    
    
    
    
it('should show three when 3 is called'), function(){
    assert.equal(toNumber("three"),3)
}

it('should multiply three and three', function(){
    assert.equal(multiply("three","three"),9);            
});

it('should add zero and one', function(){
    assert.equal(plus("zero","one"),1);
});

it('should add four and five', function(){
    assert.equal(plus("four","five"),9);
});
it('shoudl add ten and ten', function(){
    assert.equal(plus("ten","ten"),20);
});
it('should minus four from five',function(){
    assert.equal(minus("five","four"),1);
});




//zero through ten
console.log(plus("one","one"));
console.log(plus("two","two"));
console.log(plus("three","three"));
console.log(plus("four","four"));
console.log(plus("five","five"));
console.log(plus("six","six"));
console.log(plus("seven","seven"));
console.log(plus("eight","eight"));
console.log(plus("nine","nine"));
console.log(plus("ten","ten"));
//ten through twenty





console.log(minus("five","four"));
console.log(multiply("three","three")); 