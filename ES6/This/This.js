// A function's this keyword behaves a little differently in JavaScript compared to other languages.
// It also has some differences between strict mode and non-strict mode.
// This is a keyword that particularly refers to an Object.
// The value of this keyword would change according to the context in which it is being referred to.
// Global Execution Context 
// Windows object is created in the global execution context.

// In the Global space the value of this is equal to the window object
// console.log(this);
// We need this only for calling a function

// function fn(){
//     console.log(`My Name is ${this.person}`);
// }
// output undeifned
// Normal Fucnction Call
// fn();
// Global this value is equal to the window object.
// The value of this for a fucntion depends on the how the fucntion is called.
// In normal function call the value of this is passed as window object only.
// Noramal call means without object.

// Fucntion Call With Object
function fn(){
    console.log(this);
    console.log(`My Name is ${this.person}`);
}
let obj = {
    person:'name',
    func:fn
}
// obj.func();
// When fn() is called through object the func() has reference of the fucntion fn so obj this is passed to the fn.
// In this case function this is equal to the object through which fn is called.
// *** output ***
// My name is name

// Calling funcion using defiantio/reference
// store the reference of the fn()
let def = obj.func;
def();
// In this case the this is Passed as window object.
// *** Output ***
// Window object
// My name is undefined
// Only var value is attatched on the window let value is not attached to the window