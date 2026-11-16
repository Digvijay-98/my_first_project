// let massage = "hello world From Wisdom Sprouts IT Training hub";

// function reverseString(sentence) {
	// return sentence.split("").reverse().join("");
// }

// Task2

// console.log(reverseString(massage));

// *********************

// let str = "Learning JavaScript is fun! Fun and Easy to learn JavaScript";


// Task 3

// const age = [{name: "amar", age: 25}, {name: "rahul", age: 16}, {name: "ramesh", age: 35}];
// function filterstudents(arr) {
//   return arr.filterstudents(person => person.age >= 18);
// }      
// console.log(filterstudents(age));


// Task 4 Assending order based on price

const products = [{name: "keyboard", price: 499}, {name: "monitor", price: 8999}, {name: "mouse", price: 299}];

function sortProductsByPriceAscending(arr) {
  return [...arr].sort((a, b) => a.price - b.price);
}

console.log(sortProductsByPriceAscending(products));