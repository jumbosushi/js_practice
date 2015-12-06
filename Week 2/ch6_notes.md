##Programming in the browser!
alert() and prompt() is both method of windows object!

*Browser Object Model (BOM)*
The collection of objects that the browser makes available to you for use!

BOM != DOM

Although there is a variation in what BOM the browser has depending on its version and type,
this will focus on the core functinoality of BOM aka the ones that exists in most browsers

###Basic BOM

-window object
    - location object
    - history object
    - navigator object
    - screen object
    - document object
        - forms object
        - images object
        - links object

Browser window or frame is basically a window object

HTML page representation is document object


###window object

It represents the browser's frame or window.

Window is a global object aka you don't have to specify it when you use it!

```
windows.alert("yoyoyo");
// or
alert("yoyoyo");

var thisTest = "Yup";
console.log(window.thisTest);
// this works as well since global!

```

- history object contains the history of pages visited by the user
- navigator holds information about the browser
- screen object contains info about the display capbilities
- location object is info about where in the page the user is



