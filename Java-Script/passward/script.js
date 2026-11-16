// Dom Elements
const lengthInput = document.getElementById('length');
const numbersCheck = document.getElementById('numbers');
const uppercaseCheck = document.getElementById('uppercase');
const specialsCheck = document.getElementById('specials');
const excludeAmbiguousCheck = document.getElementById('excludeAmbiguous');
const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');
const showPasswordCheck = document.getElementById('showPassword');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const copyBtn = document.getElementById('copyBtn');

// Base character pools
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const ambiguousChars = ['l', '1', 'I', 'o', '0', 'O'];

// Function to remove matching elements from a string pool
function filterAmbiguous(pool) {
    return pool.split('').filter(char => !ambiguousChars.includes(char)).join('');
}

// core function to generate the random combination
function generatePassword() {
    let length = parseInt(lengthInput.value) || 17;
    
    let allowedChars = lowercaseChars;
    if (uppercaseCheck.checked) allowedChars += uppercaseChars;
    if (numbersCheck.checked) allowedChars += numberChars;
    if (specialsCheck.checked) allowedChars += specialChars;

    if (excludeAmbiguousCheck.checked) {
        allowedChars = filterAmbiguous(allowedChars);
    }

    if (allowedChars.length === 0) {
        passwordOutput.value = "Select at least 1 option";
        updateStrength(0);
        return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    passwordOutput.value = generatedPassword;
    updateStrength(length);
}

// Basic rules logic to determine strength indicator representation
function updateStrength(length) {
    if (length === 0) {
        strengthBar.style.width = "0%";
        strengthText.innerText = "";
        return;
    }

    if (length < 8) {
        strengthBar.style.width = "30%";
        strengthBar.className = "progress-bar bg-danger";
        strengthText.innerText = "Weak";
    } else if (length < 12) {
        strengthBar.style.width = "65%";
        strengthBar.className = "progress-bar bg-warning";
        strengthText.innerText = "Medium";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.className = "progress-bar bg-success";
        strengthText.innerText = "Very Strong";
    }
}

// Visibility toggle control
showPasswordCheck.addEventListener('change', () => {
    passwordOutput.type = showPasswordCheck.checked ? "text" : "password";
});

// Copy clip to browser clipboard feature
copyBtn.addEventListener('click', () => {
    if (!passwordOutput.value || passwordOutput.value === "Select at least 1 option") return;
    
    navigator.clipboard.writeText(passwordOutput.value);
    
    const originalText = copyBtn.innerText;
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
        copyBtn.innerText = originalText;
    }, 1500);
});

// Wire up generator trigger actions
generateBtn.addEventListener('click', generatePassword);

// Initialize with a generated password on launch
generatePassword();
