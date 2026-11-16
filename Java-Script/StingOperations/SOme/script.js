

const inputParaElmt = document.getElementById("inputPara");
const resultDivElmt = document.getElementById("resultDisplay");


// Results of all tabs
// vowel checking function
function checkVowels(){
    const str = inputParaElmt.value;
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            count++;
        }
    }
    resultDivElmt.textContent = "Number of Vowels in Paragraph: " + count;
}


function checkConsonants(){
    const str = inputParaElmt.value;
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const count = matches ? matches.length : 0;
    resultDivElmt.textContent = "Total Consonants: " + count;

}

function checkPalindrome(){
    const str = inputParaElmt.value;
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    
    if (cleanStr === "") {
        resultDivElmt.textContent = "Please enter text first";
    } else if (cleanStr === reversedStr) {
        resultDivElmt.textContent = '"' + str + '" is a Palindrome';
    } else {
        resultDivElmt.textContent = '"' + str + '" is NOT a Palindrome';
    }
}

function reverseString(){
    const original = inputParaElmt.value;
    const reversed = original.split("").reverse().join("");
    resultDivElmt.textContent = "Reversed string: " + reversed;
}

// 2nd line

function convertToSmall(){
    const str = inputParaElmt.value;
    resultDivElmt.textContent = str.toLowerCase();
}

function capitalizeString(){
    const str = inputParaElmt.value;
    resultDivElmt.textContent = str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function titleCaseString(){
    const str = inputParaElmt.value;
    const titleCased = str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    resultDivElmt.textContent = titleCased;
}

function checkPalindrome(){
    const str = inputParaElmt.value;
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    
    if (cleanStr === "") {
        resultDivElmt.textContent = "Please enter text first";
    } else if (cleanStr === reversedStr) {
        resultDivElmt.textContent = '"' + str + '" is a Palindrome';
    } else {
        resultDivElmt.textContent = '"' + str + '" is NOT a Palindrome';
    }
}

// 3rd line

function convertToWord(){
    const str = inputParaElmt.value;
    const words = str.split(" ");
    resultDivElmt.textContent = "Words: " + words.join(", ");
}

function replaceSpacesWithHyphens(){
    const str = inputParaElmt.value;
    const result = str.replace(/ /g, "-");
    resultDivElmt.textContent = "Result: " + result;
}

function reverseCharacters(){
    const str = inputParaElmt.value;
    const result = str.split("").reverse().join("");
    resultDivElmt.textContent = "Reversed Characters: " + result;
}

function sortWords(){
    const str = inputParaElmt.value;
    const words = str.split(" ");
    const sortedWords = words.sort();
    resultDivElmt.textContent = "Sorted Words: " + sortedWords.join(", ");
}