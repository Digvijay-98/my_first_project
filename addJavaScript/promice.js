// let chaiWithRushi = new Promise ((resolve, reject)=>{
//     digvijay =true

//     if (digvijay) {
//         resolve ("chai")
//     } else {
//         reject("urgent call")
//     }
// })

// chaiWithRushi
// // .then((data) => console.log(data))
// // .catch((error) => console.log(error));
 

// let secondPromise = new Promise((resolve, reject) => {
//     let success = false ;
//     if (success) {
//         resolve("data fetch successfully") ;
//     }else {
//         reject("Error while fetching data") ;
//     }
// })

// .then((data) => console.log(data))
// .catch((error) => console.log(error));


//  3rd pizza

const pizzaPromise = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        const isAvailable = false    ;
        if (isAvailable) {
            resolve("pizza dilivered");
        } else {
            reject("shop closed");
        }
    }, 5000);
})
pizzaPromise
.then((data) => console.log(data))
.catch((error) => console.log(error));