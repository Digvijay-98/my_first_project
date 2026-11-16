// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    let isValid = true;

    // 1. Full Name Validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // 2. Email Validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // 3. Mobile Number Validation
    const mobile = document.getElementById('mobileNumber').value.trim();
    const mobileRegex = /^[1-9]\d{9}$/; 
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        isValid = false;
    }

    // 4. Gender Validation
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    // 5. Password Validation
    const password = document.getElementById('password').value;
    
    if (password.length < 6) {
        document.getElementById('passwordErrorLength').style.display = 'block';
        isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
        document.getElementById('passwordErrorUpper').style.display = 'block';
        isValid = false;
    }
    if (/\d/.test(password)) {
        document.getElementById('passwordErrorNumber').style.display = 'block';
        isValid = false;
    }

    // 6. Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword || confirmPassword === "") {
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
