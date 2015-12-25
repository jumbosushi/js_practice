#Regular Expressions

[This site is AMAZING](https://www.debuggex.com/)

Regular expressions is supa hot fire powerful in programming! :cow:

Reg expressions start with / and end with /
ex. /abc/   - the first letter a, 2nd b and so on

\ is used for special characters!
- \n means to skip a line

```javascript
console.log(/abc/.test("abcddd"))
// true
```

###Matching a set of characters

in Reg Expressions, **[ ] represent a range that is to be matched**

```javascript
console.log(/[0123456789]/.test("in 1992"));
// true
console.log(/[0-9]/.test("in 1992"));
// true
```

Shortcuts:
- \d = Any digit character
- \w = An alphanumeric character ("word character")
- \s = Any whitespace character (includes space, tab, newline, etc)
- \D = A character that is not a digit
- \W = A nonalphanumeric character
- \S = A nonwhitespace character
- .  = Any character EXCET for new line

To indicate inversion of a set of characters (aka NOT include), you use "^" sign
```javascript
var notBinary = /[^01]/
console.log(notBinary.test("11001110101001"))
// true
console.log(notBinary.test("1100112200"))
// false
```

###Repeating partly

putting + after a RegEx implies that element can repeat more than once

putting * indicate that it can match 0 times or more

putting ? indicate that element may appear once or twice

```javascript
console.log(/'\d'/.test("'123'")):
// true
console.log(/'\d+'/.test("''"));
// false

console.log(/yup*/.test("yu"))
// true
console.log(/yup*/.test("yuppppppp"))
// true

console.log(/colou?r/.test("color"))
// true
console.log(/colou?r/.test("colouur"))
// false
```

{X} indicate to repeat the expression X times
{X,Y} is allowed, which means to repeat at least X times but at most Y times

```javascript
var dateTime = /\d{2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 5:33"))
```

() indicate to group the elements inside!

Additionally putting "i" at the end makes the RegEx case insensitive!!! #mindblown

```javascript
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("booHooohoohooohoo"))
// true
```

###Matches and Groups

So far we've seen "test" method of RegEx, and it simply return true or false

RegEx also has "exec" (execute) method!

returns null if no match was found OR return the elements matched in array format!

```javascript
var match = /\d+/.exe("one two 100");
console.log(match);
// ["100"]
console.log(match.index);
// 8

// String have a similar method called "match"
console.log("one two 100".match(/\d+/));
// ["100"]
```

When the RegEx contains ( ), the result becomes a bit different

The result will be in order of:
1. The String that matches the ENTIRE RegEx
2. The String that matches the () part!

```javascript
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// ["'hello'", "hello"]
```

When the ( ) does not get matched:
It' position will be undefined
```javascript
console.log(/bad(ly)?/.exec("bad"));
// ["bad", undefined]
```

When the group is matched more than once:
only the last match is outputed
```javascript
console.log(/(\d)+/.exec("123"));
// ["123", "3"]
```

###Date object

new Date() create the current time-stamp

.getTime() converts the time object into Unix Time aka to millisecond

```javascript
console.log(new Date(2013, 11, 19).getTime());
// 13874076000
```

RegEx can be used to extract the information we want from date format
```javascript
function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4});
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2]) - 1,
                  Number(match[1]));
}
console.log(findDate("20-1-2015"));
// Thu Jan 20 2015 00:00:00 GMT+0100
```

^ has a special use case!

when used outside of [], ^ indicate the beginning of the string compared

Additionally $ indicate the end of the string

At the same time, **\b** indicate the word boundary!

```javascript
console.log(/\batsushi\b/).test("atsushi");
// true
```

###Choice

"|" sign indicate the options that could happen
=> basically like || in js

It is good practice to use () to group options to together

```javascript
var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("100 pigs"))
// true
console.log(animalCount.test("1123 cow"))
// true
```

*wait doesn't [789] and (7|8|9) does the same thing???*

**REMEMBER that [ ] is more optimized than (| |)!!!**

The short explanation is because | backtracks
the longer reason is in [this stackoverflow](http://stackoverflow.com/questions/9801630/what-is-the-difference-between-square-brackets-and-parentheses-in-a-regex)

using this concept...
```javascript
/\b([01]+t?|\d+|[\w0-9]+x)\b/
```
this RegEx accepts three major options or branches
1. bunch of 0 & 1 plus table
2. series of digits
3. series of letters OR digits plus x

This image summaries the workflow
**(image courtesy to "Eloquent Javascript")**

![RegEx workflow](http://eloquentjavascript.net/img/re_number.svg)

How RegEx works is very systematic
1. It ALWAYS goes with the first option first, in this case the 01 path
2. once it realizes that the first path does not work (for example there's
 letter "H"), the progress **backtracks** one step
3. Try the next branch / option

*Wait but what if there are more than one potential match (like "1111" - could
work on both branches)?*

**"The matcher stops once match is found"** - so it always returns the first result!

###Replace method

The replace method of string object is deeper than I thought it would be

RegEx can be used to sub string parts as well
adding g at the end of RegEx makes it into a gsub!

```javascript
console.log("papa".replace(/[pt]/, "T"))
// Tapa
console.log("papa".replace(/[ab]/g, "G"))
// pGpG
```

replace X RegEx can be used to flip the group of string

For each ( ), the number is assigned, and it can be accessed by $#!
```javascript
//Orignially in firstName, lastName
"Atsushi, Yamamoto\nJohn, Doe\nMicheal, Jordan"
.replace(/()[\w]+), ([\w]+)/, "$2 $1")
// Yamamoto Atsushi
   Doe John
   Jordan Michael
```
To my surprise, you can even pass a function as a replacement!

The param will be the string that matches!

```javascript
var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(matched) {
  return matched.toUpperCase();
  }))
// the CIA and FBI
```

RegEx "+". "* ", ?, and {} are thought to be **greedy** as in they try to take
  as many characters as possible!

```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 /* a */ + /* b */ 1");
// 1 1
```

to make the deduction as small as possible, use "?" !!!
```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*//g, "");
}
console.log(stripComments("1 /* a */ + /* b */ 1");
// 1 + 1
```

.search method returns the index of the match

###RegExp Object!
You can make RegExp expressions through making an object
```javascript
var test = new RegExp("[01]+");
test.test("0100111011001")
// true

var yup = /y/g
// automatically converts to RegExp object!
```

RegExp has "source" property which has the original string stored in it

also has lastIndex property where it defines where the match will start!
... well sort of

"lastIndex" only does what we want it to do ONLY when "g" option is triggered
in other words, only start from that point only in global RegExp operation

Once match is successfull, the lastIndex is updated to be where the match was!

```javascript
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
// 4
```

Another useful tool in RegExp is positive (?=) / negative(?!) lookahead

Basically, its a if statement

THe beauty is how it is used to check

Anotehr trick to use part of RegExp is check but not include in replacement
is to use $1 or $# counting method for ()!
