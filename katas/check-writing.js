var assert = require('assert');

var n = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];

function toEnglish(A){
    return n[A];
}

it('should take 10 and return ten',function(){
    assert.equal(toEnglish(10),"ten");
});
it('should take .50 turn to 50/100', function(){
    assert.equal(toEnglish(.50), 50/100);
});


console.log(toEnglish(10));
console.log(toEnglish(11));   