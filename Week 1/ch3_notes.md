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

