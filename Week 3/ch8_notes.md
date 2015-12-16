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

