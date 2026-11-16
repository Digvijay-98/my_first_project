// if 

const isUserLoggedIn = true
const temprature = 55

if (temprature < 50) {
    console.log("less than 50");
} else{
    console.log(" tempreture greater than 50");
}


console.log("******************2nd***********************");

// const score = 199

// if (score > 99) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// const balance = 151


// if(balance < 149){
//   console.log("less than 149");
// }else{(balance > 149)
//     console.log("more than 150"); 
// }


console.log("----------------------------------------------------");

const userLoggedIn = true 
const debitCard = true
const logInFromWifi = false
const logInFromMobileInt = true 

if (userLoggedIn && debitCard) {
    console.log("allow to log In");  
}

if (logInFromWifi || logInFromMobileInt ) {
    console.log("log in From Mobile Internet");
    
}
