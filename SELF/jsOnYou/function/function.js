// let name = { a: 1, b: 2, c: 3 };

// const addthree = (num1 , num2) => {
//     return num1 + num2 
// }
// console.log(addthree(3,6,9))

// const addtwo = (num1 , num2) =>  num1 + num2 
// console.log(addtwo(3,6,9))

// code execute


// let val1 = 10
// let val2 = 20 
// function addnum(num1,num2){
//     let total = num1 + num2
//     return total
// }
// let result = addnum(val1, val2)
// let result2 = addnum(10,20)

// console.log((result))



function help(){
    // console.log("Universe always helps you")
}
help()

function makefruitjuice (fruit){
    console.log("juice is made of ",  fruit)
}
// makefruitjuice("orange")
// makefruitjuice("pineapple")
// makefruitjuice("guava")

function addition(n1,n2){
    console.log(n1+n2)
}
// addition(10,20)

// division
function division(n1,n2){
    if(n2 == 0){
    return "division by zero is not possible"
    }
    divRes = n1/n2
    return divRes
}
// console.log(division(10,2))



function carttotal(dic=20,pAmount){
    cartAmount = pAmount - (pAmount * dic / 100)
    return cartAmount
}
// console.log(carttotal(20,1000))

const greet = () => console.log("HelloUniverse")
greet()


// ananymous functions 
// function (){} 
// () => {}

// self invoked function expression (IIFE)
// (({console.log("Hello Universe")}()))


company = "Google";
com1 = (company.trim(2));
console.log(com1);

