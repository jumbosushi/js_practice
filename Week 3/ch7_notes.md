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

