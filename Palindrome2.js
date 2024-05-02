function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    var reversedStr = str.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    if (str === reversedStr) {
        return true; // It's a palindrome
    } else {
        return false; // It's not a palindrome
    }
}

// Test the function
var inputString = "A man, a plan, a canal, Panama!";
if (isPalindrome(inputString)) {
    console.log("'" + inputString + "' is a palindrome.");
} else {
    console.log("'" + inputString + "' is not a palindrome.");
}
