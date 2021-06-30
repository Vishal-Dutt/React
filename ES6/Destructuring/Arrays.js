let arr = ["India", "Australia", "America", "Japan"];
// let first= arr[0];
// let second = arr[1];

// Accessing all the values of array in one Line
// Destructuring
// let[first,second,third,fourth] = arr;
// console.log(first,second,third,fourth);

// ********* Skipping Values ***********
// ,, skips the idex value corresponding to the array
// let [first,,third,fourth] = arr;
// console.log(first,third,fourth);

// ********* Giving Default Values ***********
// let [first,second] = ["USA"];
// console.log(first);
// console.log(second);
// gives undefined 

// let [first="Aryavart",second="Bharat"] = ["USA"];
// console.log(first);
// console.log(second);

// ********* Swapping values without using third value ***********
// let a = 20;
// let b = 30;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

let [first] = arr;
console.log(first);