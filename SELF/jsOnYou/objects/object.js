// objects

const mysym = Symbol("key1")

const jsUser = {
    name: "digvijay",
    "full name": "digvijay ingole",
    mysym : "mykey1" ,
    age: 25 ,
    address: "pune",
    email : "digvijay@gmail.com",
    isloggedIn : true , 
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"] ,      
}

// console.log(jsUser.email)
// console.log(jsUser.lastLoginDays[1])
// console.log(jsUser["full name"])

// Object.freeze(jsUser)
// console.log(jsUser)

jsUser.email = "digvijay@gmail.com"
jsUser.greeting = function(){
    console.log("hello")
}

jsUser.greetingtwo = function(){
    console.log(`hello, ${this.age}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingtwo())


// part two  ///////////////////////////////////////////////////////////


const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "Hanuman"
instaUser.isloggedIn = false

// console.log(instaUser)

// ///////////////////

const secUser = {
    email : "abc@gmail.com" ,
    fullName : {
        userfullname : {
            firstname : "Digvijay" ,
            lastname : "Ingole"
        }
    } 
}

// console.log(secUser.fullName.userfullname.firstname.lastname)

  