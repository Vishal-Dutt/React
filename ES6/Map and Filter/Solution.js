// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
const squareList = arr => {
    // Only change code below this line
    arr = arr.filter(function (ele) {
        return ele > 0 && ele % parseInt(ele) == 0;
    })
    arr = arr.map(function (el) {
        return el * el;
    })
    return arr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// var ratings = [];
// // for(var i=0; i < watchList.length; i++){
// //   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// // }
// ratings = watchList.map(function(obj){
//   return {title:obj.Title,rating:obj.imdbRating}
// })
// console.log(JSON.stringify(ratings));

var filteredList;
filteredList = watchList.map(function (obj) {
    return { title: obj.Title, rating: obj.imdbRating }
});
// Only change code above this line
filteredList = filteredList.filter(function (movie) {
    return Number(movie.rating) >= 8.0
})
console.log(filteredList);

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects
// Only change code below this line
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  // Only change code above this line