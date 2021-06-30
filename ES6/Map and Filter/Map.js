let arr = [1,2,3,4,5,6];
// Double each element of the array

// Traditional
// let narr = [];
// for(let i=0;i<arr.length;i++){
//     narr[i]=2*arr[i];
// }
// console.log(narr);

// Using map
// Map is a higher order fucntion that acceps fucntion as an argument
// and returns a array
let narr = arr.map(function(ele){
    return 2*ele;
});
console.log(arr);
console.log(narr);