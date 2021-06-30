// ******** Syntax *********
// ...
// The syntax is three dots(...) followed by the array (or iterable*). 
// It expands the array into individual elements. 
// So, it can be used to expand the array in a places where zero or more elements are expected.
// let arr = [1,2,3,4,5];
// console.log(...arr);

// Concatenate array into new array
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8]

// The below line opens up the arr1 and arr2 and add 5 between them
// and wrap it in []
let narr = [...arr1,5,...arr2];
console.log(narr);

// In React we change in array by immutabiliy as changes detection in the react very fast to render the changes in UI
