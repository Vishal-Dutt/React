// Syntax of class
// Class is a template/blueprint which provide structure
// class Main {
//     constructor(person) {
//         // We can add data member in constructor only
//         this.person = person;
//         this.age = 22;
//     }
//     // Here is no need to type fucntion keyword
//     // fucntion is created in heap
//     sayHi() {
//         // use Strict
//         console.log('hello');
//         // This in this case is button as it is called because of button
//         // console.log(this);
//         // console.log(this.person);
//         // op 
//         // Undefined
//     }
// }
// // Object is the real world instance of class
// let obj = new Main('Godfather');
// let obj1 = new Main('Steve');
// console.log(obj);
// console.log(obj1);
// Class this is equal to the object created by the class.
// here in this case the this is equal to the obj 
// Main {person: "Godfather", age: 22}
//  age: 22
//  person: "Godfather"
//  __proto__:
//      constructor: class Main
//  //  reference of say hi fucntion
//      sayHi: ƒ sayHi()
//      __proto__: Object

// obj.sayHi();
// Hello
// Godfather

// let fn = obj.sayHi;
// fn();
// Output 

// ********  Exception ***********
// undefined cannot read property
// When call fucntion in class normally the default this passed is undefined in class

// Member fucntion will create only once in the heap and all object reference to it

// let btn = document.querySelector('button');
// btn.addEventListener('click', obj.sayHi);
// btn.addEventListner('click',obj.sayHi());
// There will be no ouptut ans we always pass fucntion defination to the eventlistner.
// ****** output ******
// hello
//     <button>​Click​</button>​

// The fucntion is called beacause of button so the this will be equal to the button 


// *************** BIND **********
// Problem Print Name in sayHi fucntion
// class Main {
//     constructor(person) {
//         // We can add data member in constructor only
//         this.person = person;
//         this.age = 22;
//         this.sayHi2 = this.sayHi.bind(this);
//         // this.sayHi2 defination is equal to sayHi

//     }
//     // Here is no need to type fucntion keyword
//     // fucntion is created in heap
//     sayHi() {
//         // use Strict
//         console.log('hello');
//         console.log(this.person);
//     }
// }
// // Object is the real world instance of class
// let obj = new Main('Godfather');
// console.log(obj);
// // let obj1 = new Main('Steve');
// // console.log(obj2);

// let btn = document.querySelector('button');
// btn.addEventListener('click', obj.sayHi2);

// output
// Main {person: "Godfather", age: 22, sayHi2: ƒ}
// age: 22
// person: "Godfather"
// sayHi2 is bind to the class 
// sayHi2: ƒ ()
// __proto__:
// constructor: class Main
// sayHi: ƒ sayHi()
// __proto__: Object

// ******** output *********
// hello 
// Godfather

// Good practice
// class Main {
//     constructor(person) {
//         // We can add data member in constructor only
//         this.person = person;
//         this.age = 22;
//         this.sayHi = this.sayHi.bind(this);
//     }
//     sayHi() {
//         console.log('hello');
//         console.log(this.person);
//     }
// }
// let obj = new Main('Godfather');
// console.log(obj);
// let obj1 = new Main('Steve');
// console.log(obj2);
// let fn = obj.sayHi;
// fn();
// let btn = document.querySelector('button');
// btn.addEventListener('click', obj.sayHi);
// ******* output *******
// hello
// Godfather

// Main {person: "Godfather", age: 22, sayHi: ƒ}
// age: 22
// person: "Godfather"
// sayHi: ƒ ()
// here binded sayHi is called whenever sayHi is called 
// __proto__:
// constructor: class Main
// sayHi: ƒ sayHi()
// __proto__: Object

// class member can be accessed only using this


// ************** USing Arrow Functtion ***********
class Main {
    constructor(person) {
        // We can add data member in constructor only
        this.person = person;
        this.age = 22;
    }
    // sayHi fucntion this is eqal to 
    sayHi=()=> {
        console.log('hello');
        console.log(this.person);
    }
}
let obj = new Main('Godfather');
console.log(obj);
// let obj1 = new Main('Steve');
// console.log(obj2);
// let fn = obj.sayHi;
// fn();
let btn = document.querySelector('button');
btn.addEventListener('click', obj.sayHi);
// new arraow fucntion is created for every object

// Use strict
// function fn(){
//     'use strict'
//     console.log(this);
//     console.log(`Console log`)
// }