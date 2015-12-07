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

###History object
List of pages visited is called history stack

history object has a length property
as well as back() and forward()

go() is a method that you can specify how far back you wish to go!

```
history.go(-2) // go back two pages


###location object
User can access:
- url
- server hosting
- port number of the server connection
- protocol used

You can use location object to change the page as well!

```
window.location.replace("https://8tracks.com/");
window.location.href = "https://8tracks.com/";
// same thing!
```


###navigator object
aka browser object

###document object
This is where the browsers have many differences

####images collection
ALL images in the page are stored in images collection!

The first image on the page is accessed by document.images[0]

```
//change all images to baby pictures
for (var i = 0; i < document.images.length -1; i++) {
    document.images[i].src = "http://funnystack.com/wp-content/uploads/2015/07/Funny-Baby-56.jpg";
}
//
