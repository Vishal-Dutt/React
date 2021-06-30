// Print word whose legnth greater than 3
let words=['spray','limit','destructions','destructuring'];

// let narr = [];
// for(let j=0;j<words.length;j++){
//     let word = words[j];
//     if(word.length>6){
//         narr.push(word);
//     }
// }
// console.log(narr);

// Using filter fucntion 
// If takes function as an argument 
let narr = words.filter(function(ele){
    // console.log(ele);
    return ele.length>6;
});
console.log(narr);


