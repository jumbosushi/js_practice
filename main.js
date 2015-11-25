one = "Function Declaration";
function x() {
    console.log('x');
}

//processed before any step-by-step!

y(); // Works even though it's above the declaration
function y() {
    console.log('x');
}


two = '"Anonymous" function Expression';
var y = function() {
    console.log('y');
};

//asigned a name of "y" in this case


three = 'Named Function Expression';
var z = function w() {
    console.log('zw');
};

// Has a prper name "w"
// The name of the function is not added to the scope in which the expression appreas
// the name is in scope ithin the function itself.
var z = function w() {
    console.log(typeof w); //"function"
};
console.log(typeof w); // undefined


four = "Accessor Function Initializer";
var obj = {
    value: 0,
    get f() {
        return this.value;
    },
    set f(v) {
        this.value = v;
    }
};


five = "Arrow Function Expression"

var a = [1,2,3,];
var b = a.map(n => n * 2);
