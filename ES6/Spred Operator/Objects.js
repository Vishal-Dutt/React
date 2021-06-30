let state = {
    name: 'Steve',
    address: {
        city: 'London',
        country: {
            countryName: 'United Kingdom',
            countryCode: 'UK'
        }
    }
}
// let copy = state;
// copy.name = 'Tony';
// console.log(state);
// console.log(copy);
// This will change in the original object and copy of the object as copy varable also points to the original object.
// As the reference copy of the object is created.
// IMP : Arrays objects and fucntions are created in the heap memory.

// *************** Copy object ******************
// let copy = { ...state };
// Shallow Copy of object is created 
// Create a copy of the uppermost object while the nested objecct still points to the same object location.
// copy.name = 'Loki'
// console.log(state);
// console.log(copy);
// This will change the name in the copy of the object only as copy object is created using spred operator.
// **** Output *****
// {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
// }
// {
//     name: 'Loki',
//     address: {
//       city: 'London',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
// }

// **** Defination Shallow Copy ****
// Shallow copy for an object this is spred, the uppermost level is created at a new memory space 
// The Properties of the uppermost level remain the same 
// The lower levels are affected by thsi ... they still keeps pointing to their original References

// copy.address.city = 'Delhi';
// console.log(state);
// console.log(copy);
// Output
// {
//     name: 'Steve',
//     address: {
//       city: 'Delhi',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }
//   {
//     name: 'Steve',
//     address: {
//       city: 'Delhi',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }
// This will change in the city of both object as only in the copy object of first level of object is created.
// Still the remaining object still address in both the object points to the same memory location.

// let doublecopy = {
//     ...state,
//     address:{
//         ...state.address
//     }
// }

// doublecopy.address.city = 'Delhi';
// console.log(state);
// console.log(doublecopy);

// ** output **
// {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }
//   {
//     name: 'Steve',
//     address: {
//       city: 'Delhi',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }

// doublecopy.address.country.countryName="India";
// console.log(state);
// console.log(doublecopy);

// ***** Deep Copy *****

// let deepcopy = {
//     ...state,
//     address:{
//         ...state.address,
//         country:{
//             ...state.address.country
//         }
//     }
// }
// deepcopy.address.country.countryName="India";
// console.log(state);
// console.log(deepcopy);

// *** output ***
// {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }
//   {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'India', countryCode: 'UK' }
//     }
//   }

// ****** DeepCopy Nested Levels *****
// let DeepCopy = JSON.stringify(state);
// JSON.stringify convert object convert the object into string.
// JSON.parse convert the string into object.
// JSON.parse creates the copy of converted sting of the object at the new location.
let DeepCopy = JSON.parse(JSON.stringify(state));
// console.log(DeepCopy);
DeepCopy.address.country.countryName = "India";
console.log(state);
console.log(DeepCopy);

// Changes done in copied object will change will only occur in copied variable not in original variable
// *** OUTPUT ***
// {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'United Kingdom', countryCode: 'UK' }
//     }
//   }
//   {
//     name: 'Steve',
//     address: {
//       city: 'London',
//       country: { countryName: 'India', countryCode: 'UK' }
//     }
//   }