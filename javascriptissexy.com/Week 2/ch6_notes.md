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
// #awesomeeee
```

###Responding to the User actions and events
*WHATE ARE EVENTS THO*

Events => when something happens #wowsohelpful
But how so we know when to execute a function?

=> We use *event handler* or *listerner* to do just that

Listerners are associated with the code that should be executed when event happens

native js objects have none, but BOM / DOM have primitive events & event listerners!

Listners always start with "on"
ex. onclick(), onload() etc...

We'll cover two ways:

####1. Handle events w/ HTML Attributes

```
//when it's simple
<a href="somepage.htm" name="linkSomePage" onclick="alert('You clicked?')">
        Click Me!
</a>

//when it's complicated
<script>
    function linkSomePage_onclick() {
        alert('Sup Homie');
        return true;
    }
</script>
<a href="somepage.htm" name="linkSomePage" onclick="return linkSomePage_onclick()">
        Click Me!
</a>
```

if the event function returns true, the click will jump the page to the href defined

if the event function retruns false, the proceeding actions stop

*Each browser & option have different ways to terminate actions, so always try "true" first*


Event handler for window object goes inside "body" tag!
```
<body onload="myonLoadfunction()"></body>
```

####2. Handle Events w/ Object Properties
```
<body>
<script type="text/javascript">
    function linkSomePage_onlick() {
        alert('This link is going nowhere!');
        return false;
    }
</script>
<a href="somepage.htm" name="linkSomePage">
    Click ME!
</a>
<script type="text/javascript">
    window.document.links[0].onclick = linkSomePage_onlick;
</script>
</body>
```
*the object's onclick property is set to the function!*


###Determining the User Browser
You can check whether certain functions are supported by the browser by runnign simple tests
```
if (document.getElementById)
    {
    // code using document.getElementById()
}
else
    {
    // code for browsers that do not have that method
}
```

###No scripe
Some people turn off Javascript :banana:

You can use <noscript> - shows text when js is turned off
```
<body>
<noscript>
This website requires JavaScript to be enabled.
</noscript>
</body>
```


###Other ways
Anotehr way is to user navigator object and user userAgent property and appName property
```
// for my chrome
nagigator.userAgent()
// returns "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36"
```

*This approach has couple issues!*
1. The browser might change their userAgent format in the future
2. Some minor browser uses the same userAgent string format when it doesn't use 100% of the said browser's properties
