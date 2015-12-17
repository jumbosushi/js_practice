You can keep your variables and function(?) in frame and use it in more than one pages!

Why do this?
- Makes your code modular
- Maintain info between pages

Woah there, you don't even know what modular means!

Modular is a place where all the variables and functions are defined in!
=> can use it over and over in other pages

+ All the function can be called in subsequent pages => make the load speed of the page faster!


###Frames and window object
Frames are used to split the browser window into differnt panes

Frames are defined by <frameset /> and <frame /> elements!

**frameset contains frame**

Frame is used to specify each frame

With no frame, there will be only one window
However, if there are some, **there will be more than one window obj for each frame!**

```
<frameset row="50%, *" if="ThisIsId">
    <frame name="Example ne"/>
    <frame name="This as well" />
</frameset>
````

row attr set how big the frames can be!
- The first part is how big the first one is, which is 50% of the hegiht of the window
- The part after the comma is the secon frame

The coolest part is when you access the parent's window inside each frame

```
alert("Hi my parent is  at  " + window.parent. location);
```

window.parent let you access the window object of frame's parent. Which means...
- Can access parent's functions and variables and all
- Don't forget the document and all the other good stuff
- Pretty awesome


###Coding Between Frames
```
window.parent.fcnName();
//Can access parent's function... in theory
```
As shown in ch8_pagesAsModule file example, no matter how much you travel inside the frame,
the over-layering parent file keeps track of the variables

Think of each frame as a page of its own, but inside another page #pageception


###Code Aceess between frames
We can even set the frames to be like this!

```
             +-------------------+
             |  Top Window       |
             +---------+---------+
                       |
        +--------------+------------+
+--------------+            +---------------+
|  frameMenu   |            |  frameMain    |
+--------------+            +--------+------+
                                     |
                            +--------+--------------+
                     +--------------+      +---------------+
                     | frameTop     |      |  frameBottom  |
                     +--------------+      +---------------+

//(made with http://asciiflow.com/)
```

To acess Top Window from frameTop, you call with
```
window.parent.parent.functionName()
```

and to access frameMenu from frameTop, you use frame object of the Top Window!
```
//call it with a name
window.parent.parent.frame[0]

//or even call with names
//waaaaa
window.parent.parent.frame[*frameMenu*]

//or with more straight-forwar
window.parent.parent.frameMenu

//and go further
window.parent.parent.frameMenu.myFunction
window.parent.parent.frameMenu.myVariable

//it is often smart to save the reference in a var for simplicity
var myFromRef = window.parent.parent.myForm;
```

####The top property
The "top" property of a window object returns a window object of top frame!
```
window.parent.parent.frameMenu
//becomes
window.top.frameMenu
//or just
top.frameMenu
```

- top is useful when there's multiple frames involved
- also, as long as top is fixed, adding another layer in the middle

####Scripting iFrames
ifram = Inline framing
```
<iframe name=”myIFrame” src=”child_frame.htm” />

//when accesing this frame
window.myIFrame.document.bgColor = “red”;

//supa simplu eh
```

###Opening New Window

window object has open() method
*takes three params!*

1. URL of the page (can be empty str for blank page)
2. Name for the new window (**For <a href>'s "target" purpose!)
3. (Optional) Widthe & Height

```
var newWindow = window.open("test.htm", "myWindow", "width=250, height=250")
// This gives an acess to the window of the new window!

newWindow.document.bgColor = "red";


```
