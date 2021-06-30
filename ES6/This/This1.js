// function fn(){
//     console.log(`My Name is ${this.person}`);
//     function abc(){
//         console.log(`My Name is ${this.person}`);
//     }
//     // abc() is called normally
//     abc();
// }

// let obj = {
//     person: 'asdf',
//     func:fn
// };
// obj.func();
// func() is call using object

// *** Output ***
// My name is asdf
// My name is undfined

// *** Print My name is asdf in abc() *****
// Solution Using .bind() fucntion
// Bind is a fucntion that is defined on other fucntions
// Syntax 
// let ret = fn.bind(argument);
// Bind returns a new function whose defination is similar to the fucntion on which it is called
// and whose this is explicitly set equal to the argument that is passed.

// function fn(){
//     console.log(`My Name is ${this.person}`);
//     function abc(){
//         console.log(`My Name is ${this.person}`);
//     }
//     // abc() is called normally
//     // abc();
//     let ret = abc.bind(this);
//     // ret this is now equal to this of the fn
//     ret();
//     // this of abc is equal to window object
//     // abc();
// }

// let obj = {
//     person: 'asdf',
//     func:fn
// };

// obj.func();

// ***** Output *****
// My name is asdf
// My name is asdf

// function fn(){
//     console.log(`My Name is ${this.person}`);
//     function abc(){
//         console.log(`My Name is ${this.person}`);
//     }
//     // abc() is called normally
//     // abc();
//     let ret = abc.bind(this);
//     // ret this is now equal to this of the fn
//     // ret();
//     return ret;
// }

// let obj = {
//     person: 'asdf',
//     func:fn
// };
// this is equal to object
// obj.func();
// let rf = obj.func();
// rf();
// ***** Output *****
// My name is asdf
// My name is asdf

// let ret = obj.func;
// ret();
// The fucntion is called using definaion
// In this case ret this is equl to window object
// *** output **
// My name is undefined

// ********* Arrow Function *********

// Syntax of arrow fucntion
// let identifier = (arguments if any) => {

// }
// Arrow fucntion this is equal to lexcal superior this

function fn(){
    console.log(`My Name is ${this.person}`);
    let abc=()=>{
        console.log(`My Name is ${this.person}`);
    }
    // abc() is called normally
    abc();
}

let obj = {
    person: 'Godfather',
    func:fn
};
obj.func();

// Call and apply fucntions 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call