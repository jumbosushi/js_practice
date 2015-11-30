###Common Mistakes!
- Undefined variable
- Case Sensitivity (mind lower or upper case)
- Incorrect Number of Closing Braces
- = instead of ==
- () for method or property
    You need () for methods but not property of an object!
    '''
    var test = "This is a test"

    //Good
    console.log(test.length);

    //Bad
    console.log(test.length());

    //Good
    var nowDate = new Date();
    alery(nowDate.getMonth());
    '''

    *Use () when you want to execute the function. Leave () when passing function to another function or property*

###Try...catch Statements
They go together. try runs the code, can catch catches any exceptions thrown from the try
'''
try {
    // some code
}
catch (exception) {

}
'''

Whatever error thrown in try will be under Error type, and they are stored as "exception" in catch parameters!

Exception message contains diff properties across browsers (especially IE)

All major browsers suppoer *name* and *message* properties.
    - name contains name and error type
    - message contains the error message
Javascript checks for syntax error before running the code, so the code won't run if there's one.

Throw is another debugging tool
'''
throw "This is the format";
'''
