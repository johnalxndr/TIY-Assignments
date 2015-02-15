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
        "forty":40,
        "fifty": 50,
        "sixty": 60,
        "seventy":70,
        "eighty":80,
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
    
function toNum(word){
    return numbers [word];
};

function nums(A){
    if(A.substring(0, 6)=="twenty"){
        return 20 + toNum(A.substring(6,11));
    }
    if(A.substring(0, 5)=="fifty"){
        return 50 + toNum(A.substring(5,11));
    }
    if(A.substring(0, 6)=="ninety"){
        return 90 + toNum(A.substring(6,11));
    }
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
it('should add ten and ten', function(){
    assert.equal(plus("ten","ten"),20);
});
it('should add twenty and twenty', function(){
    assert.equal(plus("twenty","twenty"),40);
});
it('should add twenty and one', function(){
    assert.equal(plus("twenty","one"),21);
});
it('should minus four from five',function(){
    assert.equal(minus("five","four"),1);
});

it('should return 1 from one', function(){
    assert.equal(toNum("one"),1);
});
it('should return 10 from ten', function(){
    assert.equal(toNum("ten"),10);
})

//plus zero through ten
console.log(nums("twentynine"));
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
console.log(plus("twenty","twenty"));
console.log(plus("twenty","one"));

//plus ten through twenty
console.log(plus("ten","ten"));
console.log(plus("eleven","eleven"));
console.log(plus("three","three"));
console.log(plus("four","four"));
console.log(plus("five","five"));
console.log(plus("six","six"));
console.log(plus("seven","seven"));
console.log(plus("eight","eight"));
console.log(plus("nine","nine"));
console.log(plus("ten","ten"));
console.log(plus(nums("fiftyone","twentynine")));

//minus zero through twenty
console.log(minus("three","two"));
console.log(minus("five","four"));

// toNum through 99
console.log(toNum("one"));
console.log(toNum("ten"));
console.log(toNum("twenty"));
console.log(nums("fiftytwo"));
console.log(nums("ninetyeight"));

