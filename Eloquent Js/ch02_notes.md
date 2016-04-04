#Program Structure#


###Variables
You can defined multiples variabes in a row with commas
```
var one=1, two=2, three=3
```

Remember there's confirm(), prompt(), and alert() for basics


####Loop
Do loop!
```
do {
    var yourName = prompt("Whacho name son?")
} while(!yourName);

console.log(yourName);
```

and remember switch as well!
```
switch (prompt("What is the weather like?)) {
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny";
        concole.log("Dress lightly");
        break;
    case "cloudy";
        console.log("Go outside");
        breakl;
    default;
        console.log("Unknown weather type!");
        break;
}
```

###Comment


/*
    this is an alternative for //
*/

###chapter exercise!
**Q1: Design a program that prints this:**
```
#
##
###
####
#####
######
#######
```

My solution:
```
var result = "";
for (var i=1; i<8; i++) {
    console.log(result += "#");
}
```

**Q2. FizzBuzz**
"Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)."


My solution:
```
var count = 0;
while (count <100) {
  count += 1;
  if (count%3 == 0 && count%5 == 0) {
    console.log("FizzBuzz");
  } else if (count%3==0) {
    console.log("Fizz");
  } else if (count%5==0) {
    console.log("Buzz");
  } else {
    console.log(count);
  };
};
```

**Q3. Chess Board**
"Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board."

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

My solution:
```
var size = 8;
var row = "";
var rowNum = true;
for (var i=1; i<=size; i++) {
  i%2==1 ? rowNum = true : rowNum = false;
  for (var j=1; j<=size; j++) {
      if (rowNum) {
       j%2==1 ? row += " " : row += "#";
    } else {
       j%2==1 ? row += "#" : row += " ";
    };
  };
  console.log(row + "\n");
  row = "";
};

//bit ugly eh :/
```
