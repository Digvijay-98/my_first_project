// Variable to store the generated OTP
let generatedOTP = "";

// Function to generate a random 4-digit OTP
function generateOTP() {
    // Math.random() gives a decimal between 0 and 1
    // Multiply by 9000 and add 1000 to keep it strictly between 1000 and 9999
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    
    generatedOTP = randomNum.toString();
    
    // Display the generated OTP on the screen (for testing convenience)
    document.getElementById("displayOtp").innerText = generatedOTP;
    
    // Clear any old message
    document.getElementById("message").innerText = "";
    document.getElementById("message.style.color").color = "black";
}

// Function to validate the user's entered OTP
function validateOTP() {
    const userInput = document.getElementById("otpInput").value;
    const messageElement = document.getElementById("message");

    // Check if the user left the input empty
    if (userInput === "") {
        messageElement.innerText = "Please enter the OTP!";
        messageElement.style.color = "orange";
        return;
    }

    // Check if user input matches the generated OTP
    if (userInput === generatedOTP) {
        messageElement.innerText = "Success! OTP is valid.";
        messageElement.style.color = "green";
    } else {
        messageElement.innerText = "Error! Invalid OTP. Try again.";
        messageElement.style.color = "red";
    }
}
