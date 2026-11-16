const fruits = ["apple", "orange", "grapes", "banana", "mango"];
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

// map
numArray.map((value, index) => {
    // console.log(value ** 2);  
});

// filter
less5 = numArray.filter((val) =>  val <= 5 )
// console.log(less5);

// find
find = fruits.find((fin) => fin == "orange")
// console.log(find);

// index of 
const indexoff = fruits.indexOf("banana");
// console.log(indexoff);


// sort


// concat means combine
concatt = fruits.concat(numArray)
// console.log(concatt);


// some
somee = numArray.some((so)=> so>5 )
console.log(somee);


// every
everyy = numArray.every((evr)=> evr>10)
console.log(everyy);


// include


// reduce

redu = 0
for (let index = 0; index <numArray.length; index++) {
    redu = redu + numArray[index]
}
console.log(redu);
