function checkNumber(){
    const n1 = Number(document.getElementById("num1").value);
    if (Number.isNaN(n1)) {
        console.log("Please enter a valid number.");
        return;
    }
    if(n1 > 0){
        console.log("positive no.");
    }else if(n1 < 0){
        console.log("negative no.");
    }else{
        console.log("zero");
        
    }
}
