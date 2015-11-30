#Ch.3 Beggining Javascript Note
by Atsushi Yamamoto

###Decisions
{ } in Javascript represent the block
if statement could be written without {}
BUT keep in mind that *only thefist line after will be executed without {}*
Check this out:

'''

// Good
if (name = "Atsushi) {
    console.log("Awesome");
}

//Also Good
if (!name = "Bob")
    console.log("Awesome");

// Ouch
if (!name = "Bob")
    console.log("Awesome");    //ONLY this line will run as a result of if;
    name = "Atsushi";
    console.log("Come on");

'''


###Switch Statement
switch is made of 4 parts
- The test Expression
- The case statements
- The break statements
- The default statment


'''

switch (myName)
{
    case "Paul":
        // some code
        break;
    case "John":
        // some other code
        break;
    defalt:
        // default code
        break;
}

//You can run different cases by:
switch (secretNumber)
{
case 1:
case 2:
    // some code;
    break;
default:
    // default code;
    break;
}

'''


###for-Loop

'''

for (loopCOunter=1;loopCounter<=3;loopCounter++)
{
    execute this code;
}

'''


###for-in-loop (for-each)
ex

'''

// iterate through all elements in myArray
var elementindex;
for (elementIndex in myArray) {
    document.write(myArray(elementIndex));
}

'''


###do-while loop
Used when you want the code to run at least once before the loop

'''

var userAge;
do {
    userAge = prompt("Please enter your age!");
} while (isNaN(userAge))==true;

'''


It's important to note that the use of global variable should be minimized. As much as they are useful, it would be too difficult to debug them as they could have been changed anywhere in the code.

Variables have a life time. Global variables last till the program ends, but local variables are deleted to free memory when the function has finished running. Cool eh.

####Break and Continue
You can use break inside a loop to stop the iteration
"continue" can be used break to inform the user. but still run!
