### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [primitive: boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

* _symbol_: `new Boolean([value])`
* _pronunciation_: "boo-lean"
* _examples_:
```javascript
50 < 60 == true
true
```

### [Primative: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* _symbol_: 'The numeric value of the object being created.'
* _pronunciation_"number" "integer"
* _examples_:
```javascript
1
7
12
24
```
### [Primative: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* _symbol_: "sequence of characters"
* _pronunciation_ "string"
* _examples_:
```javascript
"hello there!"
```
### [Built in Values: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: "NaN"
* _pronunciation_: "not a number" "nan'"
* _examples_:
```javascript
"john" === NaN
```
### [Built in Values: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: "Infinity"
* pronunciation_: "in-fin-ne-tee"
* _examples_:
```javascript
10 * infinity == infinity
```
### [Built in Values: Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

* _symbol_: "Undefined"
* _pronunciation_: "un-de-fined"
* _examples_:
```javascript

```
### [Operators: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: " + "
* _pronunciation_: "addition" "a-dish-shon"
* _examples_:
```javascript
5 + 5
```
### [Operators: Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: " - "
* _pronunciation_: "subtraction" "sub-tract-shon"
* _examples_:
```javascript
5 - 4
```
### [Operators: Multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: " * " 
* _pronunciation_: "multiplication" "mull-tip-li-cashon"
* _examples_:
```javascript
10 - 9
```
### [Operators: Division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: " / "
* _pronunciation_: "div-i-shon"
* _examples_:
```javascript
20 / 5
```
### [Operators: Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: " % "
* _pronunciation_: "re-mane-der"
* _examples_:
```javascrit
12 % 5
```

<!--### [Operators: Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))-->

### [Control Flow: IF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#if...else_Statement)

* _symbol_: " if "
* _pronunciation_: "if"
* _examples_:
```javascript
if(5==5){
    console.log("cool")
};
```
### [Control Flow: Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)
* _symbol_: " else "
* _pronunciation_: "else"
* _examples_:
```javascript
if(1==2){
console.log("no-way");
} else{
console.log("thats wrong");
};
```
### [Statement: Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
* _symbol_: "return"
* _pronunciation_: "return"
* _examples_:
```javascipt
function square(x){
return x * x;
}
```
### [Statement: Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)
* _symbol_: '{   }'
* _pronunciation_: 'block'
* _examples_:
```javascript
while (x < 10) {
  x++;
}
```
### [Statement: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Loop_Statements)
* _symbol_: "for"
* _pronunciation_: "for"
* _examples_:
```javaascript
```
### [Literals: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Array_literals)
* _symbol_: "[ ]"
* _pronunciation_: "array" "new array"
* _examples_:
```javascript
var colors = ["Blue", "Red", "Orange"]//3 elements created
var names = ["John", , "David"]// commas create 'undefined' element

```
### [Property: Array.Length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
* _symbol_: "arr.length"
* _pronunciation_: " "
* _examples_:
```javascript
var numbers = [1, 2, 3, 4];
numbers.length
```
### [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* _symbol_: "arr.pop()"
* _result_: removes the last element from an array and returns that value 
* _parameters_:none

### [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* _symbol_: "arr.push()"
* _result_: adds one or more elements to the end of an array and returns the new length of the array. 
* _parameters_: elementN-the elements to add to the end of the array

### [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* _symbol_: "arr.reverse()"
* _result_: reverses an array in place. the first array element becomes the last and the last becomes first. 
* _parameters_:none

### [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
* _symbol_: "arr.shift()"
* _result_: removes the first element from an array and returns that element. this method changes the lenght of the array.
* _parameters_: no

### [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* _symbol_: "arr.sort([compareFunction])"
* _result_: sorts the elements of an array in place and returns the array. the sort is not neccessarily stable. the default sort order is according to string unicode points. 
* _parameters_: compareFunction: optional. 

### [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* _symbol_: "array.splice(start, deleteCount[, item1[item2[, ...]]])
* _result_: changes the content of an array by removing existing elements and/ or adding new elements. 
* _parameters_: Start, deleteCount, itemN. 

### [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
* _symbol_:"arr.unshift([element1[,..[, elementN]]])
* _result_: Adds one or more elements to the beginning of an array and returns the new length of the array.
* _parameters_: elementN.

<!--
Literal: Array
Iterator Methods
-->

### [Array.prototype.every]
* _params:_
  * `callback`: `Function` to test each element against
    * _params:_
      * `item`: element to process
      * `index`: index of processed element
      * `all`: array instance
    * _returns:_ `Boolean`
  * `thisArg`: `Object` to which to bind `callback`
* _returns:_ `Boolean` whether `callback` returns `true` for _every_ element
* _example:_
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?

  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...

    hasFailed = !callback(item, index, all); // why invert here?
  });

  return !hasFailed; // Another inverse?
  // What if `anArray` is empty?
}
```
### [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* _params_:
  * 'callback': 'Function' that produces an element of the new Array, taking three arguments.
* _returns:_ 'undefined'
* _example:_
```javascript
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note ellision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```
###  [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* _params_:
  * 'callback':current value, index, array, 
  * 'thisArg':Optional. Value to use as this when executing callback. 
* _returns:_true, false
* _example:_
```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* _params_:
  * 'callback': element, index, array.
  * 'thisArg': Optional
* _returns:_
* _example:_
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```
### [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* _params_:
 * 'callback': currentValue, index, array
 * 'thisArg': Optional
* _returns:_ an array with results
* _example:_
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]
```
### [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* _params:
  * 'callback':previousValue, currentValue, index, array
  * 'initialValue':
* _returns:_
* _example:_
```javascript   
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
```




