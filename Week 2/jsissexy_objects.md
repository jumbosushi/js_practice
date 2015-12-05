###Reference Data type and Primitive Data type
// prmitive data type String is stored as a value

```

var person = "Kobe";
var anotherPerson = person; //anotherperson = value of person
person = "Bryant";

console.log(anotherPerson); //Kobe
console.log(person); //Bryant

//----------------------

var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); //Bryant
console.log(person.name); //Bryant

```

When objects are made, they have three attributes by default:

1. Configurable Attribute - property can be deleted or changed

2. Enumerable - can be returned in a for/loops

3. Writable - The property can be changed


###Creating Objects!
####1. Object literals

```
//initialization
var myBooks = {};

var mango = {
    color: "yellow";
    shape: "round";
    sweetness: 8;
    howSweetAml: function() {
        console.log("Hmm Hmm Goooood");
    }
}
```

####2. Object Construcor
```
var mango = new Object();
mango.color = "yello";
mango.shape = "round";
mango.sweetness = 8;

mango.howSweetAml = function() {
    console.log("Hmm Hmm Gooood");
}
```

####3. Constructor Patterm
```
function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function() {
        console.log("This is a " + this.fruitName)
    }
}

// To define inherited property, use prototype
someObject.prototype.firstName = "rich";
```

####4. Prototype pattern
```
function Fruit () {};
Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function () {
console.log("This is a " + this.fruitName);
}
```

###Accessing Properties on an Object
####1. Dot Notation
```
var book = {title: "Ayy it works"};
console.log(book.title);
```

####2. Bracket Notation
```
concole.log(book["title"];)
```

###Properties

*Own and Inherited Properties*

```
var school = {schoolName: "UBC"}

console.log("schoolName" in school) //true
// since it is school's own property

console.log("schoolType" in school) //false
// since it is not defined nor not inherited

console.log("toString" in school) // true
// since it is inherited from Object prototype

```

*hasOwnProperty*

```
var school = {schoolName: "UBC"};

console.log(schoo;.hasOwnProperty("schoolName")); //true
// since it is defined

console.log(school.hasOwnProperty("toStrign")); // false
// since it is inherited rather than being defined
```

*Accessing and Enumerating properties*

```
var school = {schoolName: "UBC", awesomeness: 100, sushigoesthere: true};

for (var eachitem in school) {
    console.log(eachItem);
}
```


###Delete properties

*You can't delete the properties inherited! or the ones set to configurable*

```
// if .hasOwnProperty is true, then you can deelte it!
var school = {name: UBC};

school.hasOwnProperty("name") //true

delete school.name //done
```

###Stringify & Parse objects!

```
var student1 = {name: "Atsushi", awesome: true};
var student2 = "{name: "Yamamoto", japanese: true}";

// Stringify object
var string1 = JSON.stringify(student1);
// "{name: "Atsushi", awesome: true}"

// Parse object
var objec2 = JSON.parse(student2);
//


J
