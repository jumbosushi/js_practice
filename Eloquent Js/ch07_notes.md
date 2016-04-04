#Debugging

JavaScript is not helpful at all when it comes to debugging :angry:

You can add the line "use strict mode" to enable strict more!

 ```
function canYouSpotTheProblem() {
  "use strict";
  for (conunter = 0; counter < 10; counter++)
    console.log("Happy happy");
}
```

When something does go wrong, it is good practice to let the user know
what happened

Another way to handle error is to stop the program the moment error is thrown,
and indicate

   => called **Exception Handling**

When the exception is thrown, it "jumps" all the way up to the first called

   => called **Unwinding the stack**



```
function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: "" + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("you see", look());
} catch (error) {             // inside () can be anything!
  console.log("Something went wrong: " + error);
                    // adding error itself will be a message!
}
```


When error is identified, Error object should be created!

Error object accept the string params to be its *message*

A good practice to include information about **stack trace**

*"finally"* block of the try-catch block is run after the "try" is run no matter
the result.
  => It is used to clean up after the exception
  ex. To put the mutated variable into its original value


###Selective catching

JavaScript doesn't provide any direct support for selective catching!

This means that programmers tend to assume that the exception being thrown
is the one they designed

```
for (;;) {
  try {
    var dir = promtDirection("Where?"); // <- Typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again")
  }
}
```

There is a typo in this program, but the catch block assumes dir was null!
=> Bad practice :/
=> Better to specify the details of the error


In order to catch specific error, we have to define out own!
```
function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.Prototype);
InputError.prototype.name = "InputError";

// Since InputError has the same prototype as Error
var test = new InputError("This is a test");
console.log(test instanceof Error)        //true
```

Yup, the type of error can be checked by checking the equality with the
expected string message, but that is harder to manipulate later on!

By doing this, InputError can be thrown at appropriate place!

```
function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

// catching more specifically

for (;;) {
  try {
    var dir = promptDirection("Where?");
    console.log("You see ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError)
      console.log("Not a valid direction. Try again");
    else
      throw e;
  }
}
```

###Assertions

Assertions are type of functions that runs a basic run&check for functions

Basically like Java's JUnit tests, but you gotta right your own!

```
function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}
```



---------------------------------------------------

###Exercises

**Q1 Retry**

"Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers, and in the other 50 percent, raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result."

My solution:
```
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

//Your code here

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a,b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure)
      	console.log("Multiplication did not happen");
    };
  };
}

console.log(reliableMultiply(8, 8));
// → 64
```


**Q2 The Locked Box**

Given this box:
```
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};
```

"Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception."

```
function withBoxUnlocked(body) {
  // Your code here.
  try {
    box.unlock();
    body()
  } finally {
    box.lock();
  }

}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
``` 
