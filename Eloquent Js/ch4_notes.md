#Data Structures & Arrays

###Arrays
```
var listOfNumbers = [1, 2, 10, 9, 14]
```

some array methods:
- array.push("Something")
- array.join(" ")
- array.pop()     //return the last element of the array


###Objects
```
var day1 = {
  squirrel: false;
  events: ["work", "touched tree", "pizza", "running",   "Netflix"];
};

console.log(day1.squirrel);   //false
```
Important thing to note is that while you can defined the property w/ = instead of :. it is a bad practice.
It is since doing so will override whatever value key might have kept beforehand.

You can either delete the property by "delete" or defining it to undefined

```
var anObject = {left: 1, right:2};

anObject.left = undefined;
console.log("left" in anOBject)
// true

delete anOBject.left;
console.log("left" in anOBject)
// false
```

while delete command eliminates both the key AND value, defining to undefined maintains the key.

"<key> in <Object>" returns true if the key exists!

###Mutability
Objectst are mutable
Numbers, Strings, Boolean are immutable

```
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

console.log(obj1 == obj2);
// true
console.log(obj1 == obj3);
// false
// variables pointing at different object, although the context of objects are identical
```

== are precise equality checker
(something like in java)

###Objects as Maps

You can define an object into a way map is defined:

```
var map = { };
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

console.log("pizza" in map);
//true
console.log(map["touched trees"]);
//-0.081
```

As object/map stores information in non-orderly way, normal for-loop can't be used.

Instead, for-each loop is the good way to go!

```
for (var event in map)
  console.log("The correlation for '" + event
               + "' is " + map[event]);
// The correlation for 'pizza' is 0.061

```

###Deeper into Arary

.shift()      => remove the first element & move everything else backward

.unshift()    => add to the first position & move everything else forward

```
var todoList = [];

function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}
```

.lastIndexOf(#)   => find the index of the last time the element is seen

**both indexOf and lastIndexOf has 2nd optional arg that states where to start searching**
```
console.log([1,2,3,4,5]).lastIndexOf(2)
// 3
```

.concat   => + for string basically


###String & its properties

- .length
- .toUpperCase()
- .slice()
- .indexof()   // more than one character is ok
- .trim()

aka basics ne

###Argument Object !?!?
Whenever a function is called, a special variable names "argument" is added to the environment

*It refers to the params*

It behaves like an array, but without array methods and properties

```
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments");
}

argumentCounter("Aiya", "dang", "Woah There")
// You gave me three arguments!
```

This can be useful to refactor the function where you can put as many as you want as input

###Global Object

In js, the global variable in browser is saved in window object
```
var myNum = 11;
console.log("myNum" in window);
// true
console.log(window.myNum);
// 10
```

###Exercises

**Q1. The sum of a range**
"Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]."

My solution:

```
function range(start, end, step) {
  var result = [];
  if (start < end) {
  	if (step == undefined)
      for (var i=start; i<=end; i++)
        result.push(i);
    else
      for (var i=start; i<=end; i += step)
        result.push(i);

  } else if (start > end) {
    if (step == undefined)
      for (var i=start; i >= end; i--)
        result.push(i);
    else
      for (var i=start; i >= end; i += step)
        result.push(i);

  } else
    console.log("start and end number is same");
  return result;
};

function sum(numbers) {
  var sum = 0;
  for (var i=0; i< numbers.length ; i++)
    sum += numbers[i];
  return sum
};

// VERY ugly :/

//Test Cases
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
```

**Q2 Reversing an Array**
"Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method."

My solution:
```
function reverseArray(array) {
  var result = [];
  var size = array.length - 1;
  for (var i=0; i<=size; i++) {
    result.unshift(array[i]);
  };
  return result;
};

function reverseArrayInPlace(array) {
  var tempItem = null;
  var size = array.length - 1
  var halfSize = Math.floor(array.length/2);
  for (var i=0; i<=halfSize; i++) {
    tempItem = array[i];
    array[i] = array[size - i];
    array[size - i] = tempItem;
  };
};

//Test Cases
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

**Q3 List**
"Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on."

My solution:
```

//took forever to get this one

function arrayToList(array) {
  var list = {};
  if (array[0] != undefined) {
    list.value = array[0];
    if (array[1] != undefined)
  	  list.rest = arrayToList(array.slice(1));
    else
      list.rest = null;
  }
  return list;
};

function listToArray(list) {
  var result = [];
  for (var node = list; node; node = node.rest) {
  	result.push(node.value);
  };
  return result;
};

function prepend(element, list) {
  var result = {};
  result.value = element;
  result.rest = list;
  return result;
};

function nth(list, num) {
  var counter = 0;
  for (var node = list; node; node = node.rest) {
  	if (counter == num)
      return node.value;
    else
      counter++
  };
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```
