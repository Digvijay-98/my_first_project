







const fruits = ["apple", "orange", "grapes", "banana", "mango"];
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fruits.forEach((value, index) => {
  console.log("i like to eat", value.toUpperCase());
});

const squaredNumArray = numArray.map((Elmt) => {
  const square = Elmt ** 2;
  console.log("square of", Elmt, "is", square);
  return square;
});

// Filter()
const evenNum = numArray.filter((num) => num % 2 === 0);

const oddNum 