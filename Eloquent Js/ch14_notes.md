#Handling Events
"addEventListener" manually add event listener to the script

```HTML
<script>
  addEventListener("click", function() {
    document.write("DUDE YOU CLICKED! HAAAA");
  })
</script>
```

this will add an event listener to window object of the browser!

To associate it with specific DOM object, run it as a method

There's also removeEventListener that removes a listerner once called

```HTML
<button> I only-Act once babe </button>
<script>
  var button = document.querySelector("button");
  function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
  }
  button.addEventListener("click", once)
</script>
// giving it name makes it easier to register and delete handler function
```

There's a thing called Event Object, and it contains info about what caused the event.
event.which will indicate what action happened.   

Event object also hold "target" property that indicate where they originate.

Parent of the node also gets the event thrown to its chiildren!
The event climbs up from the node all the way till the window object at the end
(This process is called **propagation**)

Many times, you don't want one event accidentally initiating all the events in DOM,
to prevent this from happening, there's "stopPropagation" method on event object.
It stops the event at that event.

A smart way to approach a problem where there's different node to handle
is to place the event handler above the nodes, and get the value of the "target"
```HTML
<button>A</button>
<button>B</button>
<button>C</button>

<script>
  document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
      console.log("Clicked", event.target.textContent )
  })
</script>
```

###Default Action
Click a link -> jump to the destination
click a down arrow -> browser go down a page
Some elements already have defined action

interesting part is that event listeners fire BEFORE the default action
that means we can cancel them if we wish
This can be done by "preventDefault" method

This is useful in cases where
* The default action is already taken care of
* Implementing your own keyboard shortcuts

```HTML
<a href="https://develiper.mozilla.org/">MDN</a>
<script>
  var link = document.querySelector("a");
  link.addEventListener("click", function(event) {
    console.log("Nope.");
    event.preventDefault();
  });
</script>

```

###Key events
keydown event is fired whenever key is pressed!
keyup event is when key is released

the little quirk is that when key is kept pressed down, the action **reapeats**
This is useful when accelerating an object or something

Each letter and number also has a unique **character code**!
Can be checked by charCodeAt(#), including the space \s!

special keys are defined as follow:
- Ctrl   -> ctrlKey
- Shift  -> shiftKey
- Alt    -> altKey
- Meta   -> metaKey  (Mac button)

```javascript
console.log("Violet".charCodeAt(0));    // 86
console.log("1".charCodeAt(0));         // 49
```

```HTML
<p>Press Ctrl -Space to continue.</p>
<script>
addEventListener("keydown", function(event) {
  if (event.keyCode == 32 && event.ctrlKey)
    console.log("Continuing!")
})
</script>
```

Alternatively, *"keypress"* is used when the actual text of key is desired!
charCode property in an event object contains what text it is
String.fromCharCode is used to convert to actual text

```HTML
<p>Focus this page and type something.</p>
<script>
  addEventListener("keypress", function(event) {
    console.log(String.fromCharCode(event.charCode));
  })
</script>
```

###Mouse Clicks
"mousedown" and "mouseup" in the same way as keydown and keyup
wait how is it different from click?

The order of execution is:
mousedown -> mouseup -> click

If you double click, it is considered "dblclick"

all mouseevent have the information that contains WHERE it happened
that can be accesses by event.pageX or event.pageY relative to top-left corner

###Mouse Motion
mouse mouseevent is captured by "mousemove" event
