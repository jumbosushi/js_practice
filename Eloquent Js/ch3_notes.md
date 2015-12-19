#Functions!

###Scope
Globa & Local scope

```
var x = "outside";

var f1 = function() {
    var x = "inside f1";
};
f1();
console.log(x);
// -> outside

var f2 = function() {
    x = "inside f2"l
};
f2();
console.log(x);
// -> inside f2

####Nested Scope
It it totally fair to create new var inside a function

```
var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count=0; count < size; count++) {
            result += "_";
        };
    };
    var mountain = function(size) {
        result += "/";
        for (var count=0; count < size; count++) {
            result += "'";
        };
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(!);
    flat(1);
    return result;
};

console.log(landscape());
// ___/''''\______/'\_
```

In this example, the environment outside of landscape can't see flat or mountain functions!

Each local scope can also see all the local scopes that contain it
=> All variables from blocks around a function's definitions are visible!

=> This way of scoping is called **lexical scoping!**

###Functions Declaration Notation
function can be defined by:

1. var testFnc = function(){}
2. function testFnc() {} //*function declaration

the interesting part is that function declaration can be accessed from any part of the program

```
console.log("The future says:", future());

function future() {
    return "We STILL have no hoverboards";
}

//if function declaration takes place inside a conditional statement, it will not be able to be accessed from other parts!
```


###Call Stacks
How do javascript programmers show the control flow of the program?

take a look at this:
```
function waddup(who) {
    console.log("Waddup " + who);
}

greet("Harry");
console.log("See you around");
```

this code's call stacks are expressed as:
```
top
    greet
        console.log
    greet
top
    console.log
top
```
The place where the computer stores the context is **call stack**

Everytime a function is called, the current contect is put on top of the stack!

When the stack get's too extensive, the program fails with "out of stack space" message

###Optional Arguments
- If you pass extra argument to function, extra ones are ignored!
- If you pass too few, the missing ones will automatically be "undefined"

```
function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;   //you can avoid {} with this
    var result = 1;
    for (var count=0; count< exponent; count++)
        result *= base;
    return result;
};

console.log(power(4));       //16
console.log(power(4,3));     //64
```

###Closure
The time to understand closure has finally come!

Check out this example
```
function wrapValue(n) {
    var localVar = n;
    return function() {return localVar};
};

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());       // 1
console.log(wrap2());       // 2
```

it illustrastes the fact that local variables are created each time the function is called!

**Closure = "being able to reference a specific instance of local variable in an enclosing function"**

*specifically, a function that "closes over" some local variable is called* **a closure**
    => so wrapValue in this case???

----------------------------------

ok I still don't get it, but found [this javascriptissexy.com's article on closure](http://javascriptissexy.com/understand-javascript-closures-with-ease/)!

**THE MOST IMPORTANT MISSING PIECE IS THAT CLOSURE FUNCTIONS RETURN A FUNCTION!!!***

"A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables. "

Closure Rules:
1. Closures have access to the outer function’s variable even after the outer function returns
2. Closures store references to the outer function’s variables

Basic example :
```
function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";

    //This function will remember firstname!
    function lastname (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }

    return lastName;
    // RETURNING A FUNCTION!!!
}

var mjName = celebrityName("Michael");
// at this point, the outer function has returned

mjName("Jackson")   //This celebrity is Michael Jackson
//closure is called even after the outer function has returned
//but still have access to outer fcn's param
//CLOSUREEEEEE
```


Once again, the closure returns:
console.log(mjName);

//output
function lstName(theLastName) {
    return nameIntro + firstName + " " + theLastname;
}
````


--------------------------------
