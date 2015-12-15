###HTML Forms
You make form with <form></form>

They have bunch of attributes!
    - action -> where the form is submitted to
    - target -> the frame to which the form is loaded
    - name -> well its a name what can I say

Forms are collected in document.form similar to images!

####elements property
There is an elements property within forms object
-> contains all the html elements in forms!

elements has length property ==
Form object also has length property
```
document.myForm.length
// ==
document.myForm.elements.length
```

Form has .submit() method
**subit() submits the form, but it does not fire the submit event of Form object!**
*-> onsubmit event handler is not called when submitting form with submit()*

you can cancel onsubmit event by returning false, similar to how we could stop the link jump by returning false to the event handler

There is also .reset() in which clears the form & restore inital values


###HTML Elements in forms!
Each form elements inside a webpage is stored as an object
**Everything in form tag is included in document.forms object!**

####Common properties& Methods of form elements!
1. *name* property
2. *value* property
3. *form* property (return element's form object)
4. *type* property

5. *focus()* & *blur* method
    focus() puts allow the user to type the value in once user type something out of the blue
    (ex. when user press enter, the form will be auto submitted)

    blur() undo focus()

    there are onfocus() and on blur() event handlers
    (ex. onblur() is useful to check if the data entered is valid. If not, we can put the focus back())

###Button Elements!
```
<input type = "button" name="myButton" value="Click Me" />
```
Value attr of the button is the text you want on the button!

You can add a event hadnler with onclick as usual

There are also submit button and reset button!
```
<input type="submit" value="Submit" name="submit1" />
//Automatically send the form data to the server!

<input type="reset" value="Reset" name="reset1" />
//All elements are cleared in tthe form and returned to default val
```

###Text Elements
Cool methods/attr/eventhandlers!

-.slect() => select the value inside the textbox!
-onselect =>when user select the text
-onkeypress
-onkeydown
-onkeyup
-onchange => fires when the element losed focus && the value is diff from when it was focused
-**readonly** => prevent content from being changed!

useful attr:
- size => well its for size
- maxlength => limit the chrs user can type!

The password textbox is only for looks. The data is actually sent as a plain text
```
<input name="password1" type="password" />
```

####Hidden Text box
```
<input type="hidden" name="myHidden" />
```
Can be used to stored data hidden from the user!


###textarea Element
Textarea is multi-line input of text

Have cols and rows.
Cols = How many ch wide the text area will be
Rows = how many rows

```
<textarea name="myTextArea" cols="40" rows="20">
    Hello Wolrd
</textarea>
```

Another attr is "wrap" aka what happens when the user goes out of the box
The deafult wrap is "soft"
=> **the text will be automatically returned, but the return won't be sent to the server!**
"Hard settign WILL send the return to server!

Have these event handlers similar to text:
- onkeydown
- onkeypress
- onkeyup
- onchange



###Checkboxes and Radio
Radio is checkboxes that only one can be checked
They are both types of <input>
**setting attr checked's value to "checked" will set it checked!**

```
<input type="checkbox" name="myBox1" checked="checked" value="YES">
<input type="radio" name="myRadioo" checked="checked" value="Maybe...">

//#thisishowtheysentyouthosejunkmailsugh
```
Both are stored in their respective objects
**Can check the status of a box by using checked method!**
=> will return true is checked

THey have:
- onclick
- onfocus
- onblur //whatwut


###Selection Boxes
selcect is used for both drop-down list and list boxes!!

**size attr is set to define how many options the user can see!**

**To turn the list into a drop-down, the only thing you have to do is to chane the size to 1!!**

```
<select name=”theDay” size=”5”>
    <option value=”0” selected=”selected”>Monday</option>
    <option value=”1”>Tuesday</option>
    <option value=”2”>Wednesday</option>
    <option value=”3”>Thursday</option>
    <option value=”4”>Friday</option>
    <option value=”5”>Saturday</option>
    <option value=”6”>Sunday</option>
</select>

document.theForm.theDay.options[0]
//would access the first option!
```

- adding "multiple" attr to select allows the user to choose more than one option!
- select element is stored in Select element, and it has "
- selectedIndex property returns the index of selected
- option object has index, text, and value properties

####Ading and Removing Options
```
var myNewOption = new Option("TheText", "TheValue");

document.theForm.theSelectedObject.options[0] = myNewOption;
// Assign new option

document.theForm.theSelectObject.options[0] = null
//remove the option
```

####Adding New Options with Standard Method
Turns out there's built-in add & remove for us (wut)
```
var theoldone = document.form1.theDays.option[3]
add(new Option("TheNew", "OptionYouwannaAdd"), theoldone);
//The second option varies by browsers, but for major ones it the above
//Note: 2nd param as null will auto add new one to the end of list

var indexOfOptionYouwannaRemove = 0;
remove(indexOfOptionYouwannaRemove)

```


Select elements have:
-onblur
-onfocus
-onchange **In select, onchange is when the selected is changed!**





