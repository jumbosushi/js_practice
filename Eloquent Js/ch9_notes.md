#Regular Expressions

Regular expressions is supa hot fire powerful in programming! :cow:

Reg expressions start with / and end with /
ex. /abc/   - the first letter a, 2nd b and so on

\ is used for special characters!
- \n means to skip a line

```
console.log(/abc/.test("abcddd"))
// true
```

###Matching a set of characters

in Reg Expressions, **[ ] represent a range that is to be matched**

```
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
```
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

```
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

```
var dateTime = /\d{2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 5:33"))
```

() indicate to group the elements inside!

Additionally putting "i" at the end makes the RegEx case insensitive!!! #mindblown

```
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("booHooohoohooohoo"))
// true
```

###Matches and Groups

So far we've seen "test" method of RegEx, and it simply return true or false

RegEx also has "exec" (execute) method!

returns null if no match was found OR return the elements matched in array format!

```
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

```
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// ["'hello'", "hello"]
```

When the ( ) does not get matched:
It' position will be undefined
```
console.log(/bad(ly)?/.exec("bad"));
// ["bad", undefined]
```

When the group is matched more than once:
only the last match is outputed
```
console.log(/(\d)+/.exec("123"));
// ["123", "3"]
```

###Date object

new Date() create the current time-stamp

.getTime() converts the time object into Unix Time aka to millisecond

```
console.log(new Date(2013, 11, 19).getTime());
// 13874076000
```

RegEx can be used to extract the information we want from date format
```
function findDate(string) {
  var dateTime
}
```
