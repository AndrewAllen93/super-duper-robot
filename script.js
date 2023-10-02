// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-+";

//Generate Random Password
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter desired password length"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var useUppercase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?"); 

  var allChars = lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumbers) allChars += numericChars;
  if (useSpecialCharacters) allChars += specialChars; 

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
