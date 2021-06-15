//OBJECT DESTRUCTURING

// const person = {
//     name : "bharath",
//     age : 26,
//     location: {
//         city : "madurai",
//         temperature : "40C"
//     }
// }

// const {name: firstName = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`)

// const {city, temperature: temp} = person.location;

// if(city && temp)
//     console.log(`It's ${temp} in ${city}`);

// const book = {
//     title : "eagle",
//     author : "rvh",
//     publisher: {
//         name: "jr"
//     }
// }
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(`${publisherName}`)

//ARRAY DESTRUCTURING

// const address = ["2/134","States","India","625032"];

// const [, city= "TN", nation] = address;

// console.log(`You're in ${city} ${nation}`);

const item = ['coffee (hot)','$2','$2.50','$2.75']

const [itemName, ,mediumPrice] = item; 

console.log(`A medium ${itemName} costs ${mediumPrice}`)
