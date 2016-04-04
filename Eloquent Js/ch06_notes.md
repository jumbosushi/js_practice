#The Secret Life of Objects

###methods
You can add a method to objects by .<method> = fcn !

"this" is a special variable within method function definition.

"this" refers to the object that called the method itself


```
var rabbit = {name: "Atsushi"};
rabbit.yo = function() {console.log("YOOO")};

rabbit.yo() //"YOOO"

rabbit.introduce = function(thing) {
  console.log("I'm " + this.name + ", and I like " + thing)
}

rabbit.introduce(apple);
// I'm
```

function can be called specifically to diff objects with "apply" and "call"

```
function speak(line) {
  console.log("Hey hey hey "+ line + this.habit);
}

speak.apply({habit: "lol"}, "dude")
// "Hey hey hey dude lol"
speak.call({habit: "you know"}, ["rigt?"])
// "Hey hey hey right? you know"
```

###Prototypes

All object inherit prototype methods frob built-in Object Object

Object.getPrototypeof returns the prototype of the object

You can make an object in two ways (as of what I know now):
1. Object.create()
2. Constructors ( new Example() );

**IN JS YOU DEFINE A CONSTRUCTOR WITH "function"!!**

```
var protoRabbit = {
  speak: console.log("Gains bro");
}

// 1st way
var broRabbit = Object.create(protoRabbit);
broRabbit.speak
// "Gains bro"

//2nd ways
function Rabbit(type) {
  this.type = type;
}

var broRabbit2 = new Rabbit("bro");
```

you can add additional prototypes after the constructor has been made as well!

```
Rabbit.prototype.spea = function() {
  console.log("I'm " + this.type);
}

broRabbit.speak   //I'm bro;
```
You can easily override the prototype by re-defining it specifically for that object!
```
Rabbit.prototype.punch = console.log("Uppercut!")

broRabbit.punch   
// "Uppercut!"
broRabbit.punch = console.log("To the stomach!");
broRabbit.punch;
// "To the stomach!"
console.log(Rabbit.prototype.punch)
// "Uppercut"
```

###Prototype Interface

The prototype that we assign are *eumerable*, but the built-in ones are *nonenumerable*

You can define a nonenumerable prototype by using defineProperty method of Object object

Object's hasOwnProperty method returns true if the method is enumerable ones or not
```
Object.defineProperty(Object.prototype, "hiddenNonsencse", {enumerable: false, value:"HI"});

broRabbit.hiddenNonsencse
//"HI"

console.log(broRabbit.hasOwnProperty("hiddenNonsencse"))
// false
```

if you want to use the keys for nonenumerable methods, you can do so by passing null as a param for Object.create

This let the new obj have no Prototype, hence no built-in functionality
```
var map = Object.create(null)
map["pizza"] = "good";
console.log("toString" in map)
// false
consoel.log("pizza" in map)
// true
```

###Getters and Setters
Okay this is super duper consoel

Java had coders define getters and setters to protect private fields

js has get and set option(?) for each obj's method!

```
var person = {
  name: "Atsushi",
  get name() {
    return "Atsushi";
    //wanted to do this.name but that would be an unwanted loop :/
  },
  set name(newName) {
    console.log(newName +" eh? Gotta ask " + this.name + "'s parents first");
  }
};

console.log(person.name);
// "Atsushi"
person.name = "Johnathon";
// "Johnathon eh? Gotta ask Atsushi's parents first"
```

###Inheritance

When object have the same prototype as the other chosen object

```
function Racoon(type) {
  this.type = type;
};

//Inheritance taking place !
Racoon.prototype = Object.create(Rabbit.prototype);

var broRacoon = new Racoon(big);
broRacoon.yo // "YOOO"
```

instance of operator can be used to distinguish between different objects!

```
console.log(broRacoon instanceof Racoon)
// true
console.log(broRabbit instanceof Racoon)
// false
console.log(broRabbit instanceof Rabbit)
// true;
```
