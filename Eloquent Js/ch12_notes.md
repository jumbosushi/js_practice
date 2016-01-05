#Javascript and the browser

HTTP stands for **"Hypertext Transfer Protocol"**

URL stands for **"Uniform Resource Locator"**

###HTML

To type "<" and ">" in HTML:
* &lt; for <  (less than)
* &gt; for >  (greater than)

In HTML, &--; is called **entity**, and is used to type special characters

##ch/ 13
#Document Object Model

The content in the browser is organized into Tree structure called DOM

Each DOM node has a nodeType property that identifies the type of node

//From WSCSchool webstie
* If the node is an element node, the nodeType property will return 1.
* If the node is an attribute node, the nodeType property will return 2.
* If the node is a text node, the nodeType property will return 3.
* If the node is a comment node, the nodeType property will return 8.

the structure is shown in below image (from Eloqueent Javascript Book)
![thx Eloquent js!](http://eloquentjavascript.net/img/html-links.svg)

.offsetWidth and .offsetHeight shows the space the element take up in pixels

although DOM can be easily accessed, it takes a lot of work to go back and forth
hence, it is better to minimize the access

###Styling

quick CSS can be made inside HTML by making declarations inside a tag!
```HTML
<a href=".", style="color: green">This link is Green</a>
```

or you can make them inside a style tag!
```HTML
<style>
  strong {
    font-style: italic;
    color: gray;
  }
</style>
```

window.requestAnimationFrame() is useful when you make an animation inside a browser
