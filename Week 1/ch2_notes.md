#Ch.2 Beggining Javascript Note
by Atsushi Yamamoto

###Strings
"The quote marks must match"     <- ok
'No good"                <- Not good
- when you do wanna typee ' within a quote mark '', use back slash (**escape character**)
   'Hand me Ganpa's tools'

\b Backspace
f Form feed
\n New line
\r Carriage return
\t Tab
\'  Single Quote
\" Double quote
\ backslash
\x *FOR SPECIAL CHARACTERS!""
    ex. /xB0 shows the degrees sign!


###Variables

'''

    var string1 = "Hello";
    var string2 = "Goodbye";

    alert(string1);
    alert(string2);

    string2 = string1;

    console.log(string1);
    console.log(string2);

    string1 = "NOW FOR SOMETHIGN AWESOME";

    console.log(string1);
    console.log(string2);

'''

This is an interesting case!
When the last console.log is called on string2, it will print out "Hello"
NOT the new string
This is because when string1 is assigned to string2, the string is *copied rather than shared!*

^This will be explained in the future chapters...hopefully

###Increments ++ and -- increase or decrease the number by ones!
Check this out

'''

    var mynumber = 1;
    var myVar;      //undefined

    //Does the same thing!
    mynumber++
    ++mynumber

'''


But like, which one should I use

In this example,

'''

    mynumber = 1;
    // Ex 1
    myVar = (myNumber++ * 10 + 1);

    //Ex2
    myvar = (++mynumber * 10 + 1)

'''

In Ex1 the calculation is: 1 * 10 + 1 + 1== 12
*at-the-end ++ add 1 after operations!*

IN Ex2, the calculation is: 2 * 10 + 1 = 21
**at-the-begeninning ++ add 1 before the oeperation!*

sidenote: promt takes in two params (<what is displayed>, <inital value>
)

document.write() write the values directly on the document!? woah there


###Data Type Conversion
parseInt() and parseFloat()
They are called parse cuz js literally parses each character.
If unknown is in the way, funtion returns what is has parsed thus far.


###Arrays


'''


    var myArray = new Array()
    // makes a new Array eh

    var mahArray = Array("eh", "hi", "byr", "that's a typo", "eh")

    var mahArray = new Array();
    mahArray[0] = "eh";
    mahArray[1] = "hi"; // an so on...


'''


