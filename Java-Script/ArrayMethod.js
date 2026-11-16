







const fruits = ["apple", "orange","grapes", "grapes", "banana", "mango"];
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    0
fruits.map((value, index) => {
  console.log("i like to eat", value.concat(numArray));
});

const squaredNumArray = numArray.map((Elmt) => {
  const square = Elmt ** 2;
  // console.log("square of", Elmt, "is", square);
  return square;
});

// Filter()
// const evenNum = numArray.filter((num) => num % 2 === 0);

const evenNo = numArray.filter((val) => val % 2 === 0);
const oddno = numArray.filter((val1)=> val1 % 2 == 1);
const divide = numArray.map((val2)=>{
    if (2 == 0) {
      alert("even") 
      return
    }
})

console.log(divide);



