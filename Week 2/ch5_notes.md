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


####Testing through Arrays
.every(//test)     return true if all elements in array returns true to the test
.some(//true)    return true if at least one element in araay returns true to the test
*BOTH RETURN BOOLEAN!!!*

.filer(//test)     only keep the ones that pass the test


####Operation on each element in Array
.forEach(// function)     operate the function on each element of an array
```
var num = new Array(1,2,3,4,5);

function doubleAndAlert(value, index, array) {
var resutl = value * 2;
alert(result);
}
num.forEach(doubleAndAlert);
```
*forEach does not take the function that returns something!*
It only does operations on elements


.map(//function)    iterates through the array and update its elements

###Math Object
.abd()     absolute value of the number
.min(#) .max(#)     return min or max of bunch of numbers

.ceil()       round up
.floor()     round down
.round()     good'ol rounding
.random()     ramdom number from 0 -1 but 1 is not included
.pow(#, #power)     puts the power# on top of the fist number
    ex. 2^8 would be Math.pow(2,8)

###Number object
.toFixed(#)     *Specify a number of decimals you want!*
```
var num = 12.348877;
num.toFixed(2);
return num // 12.34
```


###Date Object
```
var theDate1 = new Date()
var theDate2 = new Date(949278000000) //how js actualy store the date as

var theDate3 = new Date("31 jan 2010")
var theDate4 = new Date("Jan 31 2010")
// Both are valid types!
```
*Keep in mind that countries have different date system!*
--> The best way to go is to always state the month with letters "Jan."

.getDate()
.getDay()      Mon, Tues, ...
.getMonth()
.getFullYear()
.toDateString()


