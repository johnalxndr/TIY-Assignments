### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array` |`Object` |`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?


### ['_.reject'](https://lodash.com/docs#reject)

* _params:_
  * `Array` |`Object` |`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * (Array): Returns the new filtered array.
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  

### ['_.where'](https://lodash.com/docs#where)

* _params:_
  * `Array` |`Object` |`String` `collection` to search
  * `Function`|`Object` The object of property values to match.
* _returns:_
  * (Array): Returns the new filtered array.

### ['_.chunk'](https://lodash.com/docs#chunk)

* _params:_
  * `Array`: the array to process
  * `Function`|`Object` The object of property values to match.
* _returns:_
  * (Array): Returns the new array containing chunks.
  
### ['_.compact'](https://lodash.com/docs#compact)
creates an array with all falsey values removed. 

* _arguments:_
  * 'Array: The array to compact 
* _returns:_
  * 'Array': Returns the new array of filtered values 
  
### ['_.difference'](https://lodash.com/docs#difference)
creates an array excluding all values of the provided arrays using 'SameValueZero' for equality comparisons.

* _arguments:_
  * 'Array': the array to inspect
  * 'Values': the arrays of values to exclude
* _Returns: Returns the new array of filtered values.
  