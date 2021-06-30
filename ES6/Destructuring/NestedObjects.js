const user = {
    id: 999,
    name: 'Tony',
    age: 23,
    education: {
        degree: 'B.Tech',
        university: {
            name: 'IIT',
            location: 'Delhi'
        }
    }
}
// Age
// let {age} =user;
// console.log(age);

// Double Nesting 
// Get Degree use : to get nested object
// let {education:{degree}} = user;
// console.log(degree);
// console.log(user.education.degree);


// Get University Name
// let { education: { university: { name } } } = user;
// console.log(education);
// printing education will give an error education is not defined 
// in Destructuring only last variable is created so only name is created
// console.log(name);