
let person = {
    name: 'Tony Stark',
    country: 'New York',
    job: 'Avenger'
}

// let name = person.name;
// let country = person['country'];
// let job = person.job;

// console.log(name,country,job);

// ********** Destructuring ************
// Here the variable should be equal to the name of keys
// let {name,country,job} = person;
// console.log(name,country,job);

// ********* Key is not present ************
// Undefined Case
// let {name,country,job,car} = person;
// console.log(car);

// ******** Defalut Value ********
// let {name,country,job,car='Audi'} = person;
// console.log(car);

// ********** Alias Giving name of keys *********
// Alias name if given to the key by using : after the key
let { name: a, country: b, job: c } = person;
// console.log(name);
// Undefined
console.log(a, b, c);