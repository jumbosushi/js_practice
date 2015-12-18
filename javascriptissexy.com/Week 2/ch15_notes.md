###Frameworks
Compressed (production) version - All whitespaces and comments are removed so its faster
Uncompressed (development) varsion - Have everything

###JQuery baby!
*JQuery as designed to make DOM manipulation easy!*

$( ) is a jquery function!

W3C DOM standard allow us to access DOM by getElementById() / getElementByTag()

JQuery let us use CSS selectors!
=> By referring to thing by their CSS name!

```
$("a")          //selet all <a/> elements
$("a").length   //return the length of the tag
$("a").attr("name", "HII")  //set all a have "HII" name!

$("#myDivId")   //can access specific id tag with #!

//Consider this code:
<p>
    <div>Div 1</div>
    <div>Div 2</div>
    <span>Span 1</span>
</p>

$("p > span")       //with this, you can access the span
```

CSS has *parent > child* selection method

You can also access multiple items by:

```
$("a, #myDiv, myCssClass, p > span"
```


###Changing style
JQuery has CSS method which is super nifty.
This method is useful to change stype in middle of an action

```
$("#myDiv").css("color", "red")
// .css(<attr_name>, <attr_value>)

```


Recall that CSS allows multiple class setter
```
// You only need to put space in beteen
<div class="myClass1 myClass2">
    <p>Wasuuuup</p>
</div>

//You can imulate this effect w/
$("#myDiv").addClass("myClass1 myClass2")      //spaces


//.tggleClass("myClass#")     //checks + make neew class if unabable


// you can use multiple jQuery method with:

function document_ready() {
    var a = $(document.createElement("a"))
    $(document.body).append {           //append establish # > #
        a.attr("id", "myLink")
        .attr("href", "https://jquery.com")
        .attr("title", "jQeuery's website")
        .text("Clime here!");
    };
}
$(document).ready(document_ready)
```

chaining is possible in jQuery since each method *retuns a jQuery object!*


###jQuery Event Model & Handling Events
.bind() assign a handler to an object
```
function myButton_click(event) {
    alert("you clicked");
}


$("#myButton").bind("click", myButton_click)
```

jQuery has jQuery.Event object that let events happen across any browsers!
