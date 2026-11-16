// for 
// ctr + D 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

// 2nd 

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value :${i}`);
    
    for (let j = 0; j <= 3 ; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    //    console.log(i + "*" + j + "=" + i*j);
                
    }    
}

// 3rd 

let myarray = ["Hanuman", "shreeRam" ,"Laxman", "Ganesh", "jyotiba"]
//  console.log(myarray.length);
 
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
        
}

// 4th

for (let index = 1; index <= 20; index++) {
    if (index == 9) {
        console.log(`detected 9`);
        continue
    }
    console.log(`value of i is ${index}`);
    
    
}

