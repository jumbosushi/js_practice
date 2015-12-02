##Objects

You can access the object's property by .
ex. myArray.length

Calling a method is same with ., but it requires ()!
ex. myArray.sort()

###String Object
.indexOf("smt")
.lastindexof("String")
.toLowerCase()
.toUpperCcase()
.charAt(#)
.charCodeAt(#)
.fromCharCode(#)
// Each letter has a # associated with it that is called Char code.

####.substring() & .substr()
.substring(<star>, <end>)
.substr(<start>, <how many letters to keep>)

###Array Objects
.concat() for array & array
.slice()     to get parts of array
```
var names = new Array("Paul", "Sarah", "Jeremy", "Adam")
var slicedArray = names.slice(1,3);
names // ["Sarah", "Jeremy"]
```

.join()     array to single string
Takes the breaks in between as a parameter!


.sort()     array in order
.reverse()     in opposite order
.indexOf()
.lastIndexOf()


####Looping through Arrays
.every(//test)     return true if all elements in array returns true to the test
.some(//true)    return true if at least one element in araay returns true to the test


*BOTH RETURN BOOLEAN!!!*
