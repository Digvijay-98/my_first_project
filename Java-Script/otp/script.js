// For demonstration, let's say the correct OTP is 1234
const CORRECT_OTP = "1234";

const inputs = document.querySelectorAll('.otp-box');
const verifyBtn = document.getElementById('verify-btn');
const message = document.getElementById('message');

// 1. Loop through all 4 inputs to handle user typing
inputs.forEach((input, index) => {
    
    // Listen for what the user types
    input.addEventListener('input', (e) => {
        const value = e.target.value;

        // Validation: If it's not a number, clear the box
        if (isNaN(value)) {
            e.target.value = "";
            return;
        }

        // Auto-focus next box: If a number is entered, move to the next box
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Listen for backspace key to move backwards
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
            // If current box is empty, clear the previous box and focus it
            if (input.value === "" && index > 0) {
                inputs[index - 1].value = "";
                inputs[index - 1].focus();
            }
        }
    });
});

// 2. Handle OTP Verification when clicking the button
verifyBtn.addEventListener('click', () => {
    let enteredOTP = "";

    // Combine values from all 4 boxes into one string
    inputs.forEach(input => {
        enteredOTP += input.value;
    });

    // Check if the OTP matches
    if (enteredOTP.length < 4) {
        message.innerText = "⚠️ Please enter all 4 digits.";
        message.style.color = "orange";
    } else if (enteredOTP === CORRECT_OTP) {
        message.innerText = "✅ OTP Verified Successfully!";
        message.style.color = "green";
    } else {
        message.innerText = "❌ Invalid OTP. Try again.";
        message.style.color = "red";
    }
});
