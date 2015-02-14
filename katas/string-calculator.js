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
//        "twenty one": 21,
//        "twenty two":22,
//        "twenty three":23,
//        "twenty four":24,
//        "twenty five":25,
//        "twenty six":26,
//        "twenty seven":27,
//        "twenty eight":28,
//        "twenty nine":29,
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


console.log(multiply("three","three"));
console.log(plus("zero","one"));
console.log(plus("zero","one"));
console.log(plus("four", "five"));
console.log(plus("seven","three"));
console.log(plus("ten","ten"));
console.log(minus("five","four"));