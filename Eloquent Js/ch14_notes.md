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

A smart way to approach a probem where there's different node to handle
is to place the event handler above the nodes, and get the value of the "target"
```HTML
<button>A</button>
<button>B</button>
<button>C</button>

<script>
  document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
      console.log("Clicked", event.target.textContent)
  })
</script>

```
