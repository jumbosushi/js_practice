#Ch.2 Beggining Javascript Note
by Atsushi Yamamoto 

###Strings
"The quote marks must match" 	<- ok
'No good"				<- Not good
- when you do wanna typee ' within a quote mark '', use back slash (**escape character**)
   'Hand me Ganpa's tools'

\b Backspace
f Form feed
\n New line
\r Carriage return
\t Tab
\'  Single Quote
\" Double quote
\\ backslash


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