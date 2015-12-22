#Higher Order functions

###Abstraction

###Abstraction in Arrays

Effective abstraction makes the code easier to read as well as making the code less bug prone

This
```
var array = [1, 2, 3];
for (var i=0; i<array.length; i++) {
  var current = array[i];
  console.log(current);
}
```

can be re written into (for example)

```
function forEach(array, action) {
  for (var i=0; i<array.length; i++)
    action(array[i]);
}

forEach(["A", "B", "C"], console.log)
```

in fact, Javascript arrays come with nifty function called forEach that does racket's map operation to array elements

```
var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(numbers) {
    sum += number;
});
console.log(sum)  //15
```

### Higher order functions
Higher order function = "function that operator on other functions, either by taking them as arguments or by returning them"

```
function lessThan(n) {
  return function(m) {return m < n};
}
var lessThan15 = lessThan(15);
lessThan15(7) //  true;
```

or when the function edits another function (wait isn't this a closure behaviro?)

```
function noisy(f) {
  return function(arg) {
    var val = f(arg);
    return val;
  };
}

noisy(Boolean)(0)    //false
// you can run w/ two inputs with consequtive ()'s!
```

###JSON
JSON = JavaScript Object Notation

Rules:
1. All property names gotta be within " "!
2. Simple data only - no functions or variables
3. No Comments

```
{
  "name": "Atsushi",
  "sex": "m",
  "age": 20
}
```

JSON.stringify -> takes JS value and turns into JSON

JSON.parse    ->  takes JSON syntax string and turns it into a JSON format

```
var string = JSON.stringify({name: "Atsushi", "born": 1995});
console.log(string);  
// '{"name":"X","born":1995}'
console.log(JSON.parse(string).born)
// 1995
```

###Filtering an array

```
function filter(array, test) {
  var passed = [];
  for (var i=0; i<array.length; i++) {
    if (test(array[i]))
      passedpush(array[i]);
  }
}

console.log(filter(ancestry, function(person) {
  return person.born > 1990;
}));
```

However, Array object already comes with built in filter method!

```
console.log(ancestry.filter(function(person) {
  return person.father == "Barac Obama";
}))
```

map is also a built in array method

```
var numbers = [1, 4, 9];
numbers.map(function(num) {
  return num * 2;
});
```

Just to further build our array methods foundation, there is also "reduce" method

To reduce is to fold up an array or combined the first with second, the second with the third and so on

```
function reduce(array, combine, start) {
  var current = start;
  for (var i=0; i<array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

console.log(reduce(
  [1,2,3],
  function(a, b) {return a + b},
  0
))

//or more simply
ancestry.reduce(function(min, cur) {
  if (cur.born < min.born)
    return cur;
  else
    return min;
})
// if you don't specify the start element, js will automatically choose array[0] as the starting spot
```

###Composability

Higher order functions comes in handy when composing a big function.
With the help of helper function, you can write a concise code:

```
function age(p) {return p.died - p.born};
function male(p) {return p.sex == "m"};
function female(p) {return p.sex == "f"};

console.log(ancestry.filter(male).map(age))
// Make the array of age of male ancestries
```

**Keep in mind that these multiple function calls are memory costly!**

It is much more efficient to write js in loops, but human-readable abstraction comes with the cost of inefficiency.



-----------------------------------------------


##Exercises

**Q1 Flattening**
"Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays."

My solution:
```
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(start, next) {
  return start.concat(next);
}));
// → [1, 2, 3, 4, 5, 6]
```

**Q2 Mother-Child Age Difference**
```
// For this question, JSON file of ancestors are give as "ancestry" JSON file;
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var diffs = [];
var mother_age;
function avg_mother_age() {
  ancestry.forEach(function(person) {
    if (person.mother in byName) {
      mother_age = person.born - byName[person.mother].born;
      diffs.push(mother_age);
    };
  });
  return average(diffs);
};

// → 31.2
```

**Q3 Historical Life Expectancy**
"Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100)."

```
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
var byCentry = {};

// REQUIRE: makeCentries()
// find the average age for each centry
function findAvgAge() {
  var age;
  for (var time in byCentry) {
    age = Math.round(average(byCentry[time]) * 10) / 10;
    byCentry[time] = age
  };
};

// Make the key for each centry & Add person's age to it
function makeCentries() {
  ancestry.forEach(function(person) {
    var time = getCentry(person);
    if (!(time in byCentry))
      byCentry[time] = [];
    byCentry[time].push(getAge(person));
  })
  return byCentry;
};

// Get the centry that the person lived in
function getCentry(person) {
  return Math.ceil(person.died / 100);
};

//Get the age of the person
function getAge(person) {
  return person.died - person.born;
};

makeCentries();
findAvgAge();
console.log(byCentry);       

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
```

**Q4 Every and then some**

"Write two functions, every and some, that behave like array bult-in methods, except that they take the array as their first argument rather than being a method."

```
function every(array, fcn) {
  for (var i = 0; i < array.length; i++)
    if (!fcn(array[i])) return false;
  return true;
};

function some(array, fcn) {
  for (var i = 0; i < array.length; i++)
    if (fcn(array[i])) return true;
  return false;
};
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
```
