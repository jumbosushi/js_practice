###Common Mistakes!
- Undefined variable
- Case Sensitivity (mind lower or upper case)
- Incorrect Number of Closing Braces
- = instead of ==
- () for method or property
    You need () for methods but not property of an object!

```
var test = "This is a test"

//Good
console.log(test.length);

//Bad
console.log(test.length());

//Good
var nowDate = new Date();
alery(nowDate.getMonth());

```


*Use () when you want to execute the function. Leave () when passing function to another function or property*

###Try...catch Statements
They go together. try runs the code, can catch catches any exceptions thrown from the try

```
try {
    // some code
}
catch (exception) {

}

```


Whatever error thrown in try will be under Error type, and they are stored as "exception" in catch parameters!

Exception message contains diff properties across browsers (especially IE)

All major browsers suppoer *name* and *message* properties.
    - name contains name and error type
    - message contains the error message
Javascript checks for syntax error before running the code, so the code won't run if there's one.

Throw is another debugging tool

```
throw "This is the format";
```

try..catch can be nexted!

*Finally* caluse will be executed whether or not the exception was thrown!

```
tyr {
    ablurt("An exception will occur");
}
catch {
    alert("Exception occurred");
}
finally {
    alery("Whatever happens this line will execute");
}
```

###Debugger

Modern debuggers have following features:
- Breakpoint
- Watches (specify var that you want to inspect when your code stops at breakpoint)
- The call stack is a record of what functions and methods have been executed at breakpoint
- Console logs all errors as well as playing around with the code
- Stepping
    1. "Step Into" execute the next line of code. If the next line is a function, it stops at the first line
    2. "Step OVer" execute the next line of code. If the line is a function it executes *the entire function* and stops at the first line after the function
    3. "Step Out" returns to the calling function when you'Re inside a called function. It resumes the execution of code till it finishes.
