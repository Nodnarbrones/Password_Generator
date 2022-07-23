// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//defining variables to hold character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";

var numeric = "1234567890";

var specialCharacters = "!@#$%^&*()";

//defining the function generatePassword given in the starter code
function generatePassword() {
  var length = prompt("Input the number of characters needed for your password (must be between 8 and 128 characters)");
 
  var lowerCase = confirm("Would you like to include lowercase characters in your password?");

  var upperCase = confirm("Would you like to include uppercase characters in your password?");

  var numeric = confirm("Would you like to inlcude numbers in your password?");

  var specialCharacters = confirm("Would you like to include special characters in your password?");
}

//this will occur if all the password prompts are selected
if (lowerCase && upperCase && numeric && specialCharacters) {
  result = lowerCase.concat(upperCase, numeric, specialCharacters);
}


//this  will occur if only 3 prompts are selected
else if (lowerCase && upperCase && numeric) {
  result = lowerCase.concat(upperCase, numeric);
}
else if (lowerCase && upperCase && specialCharacters){
  result = lowerCase.concat(upperCase, specialCharacters);
}
else if (lowerCase && numeric && specialCharacters) {
  result = lowerCase.concat(numeric, specialCharacters);
}
else if (upperCase && numeric && specialCharacters) {
  result = upperCase.concat(numeric, specialCharacters);
}


//this will occur if only 2 prompts are selected
else if(lowerCase && upperCase) {
  result = lowerCase.concat(upperCase);
}
else if(lowerCase && numeric) {
  result = lowerCase.concat(numeric);
}
else if(lowerCase && specialCharacters) {
  result = lowerCase.concat(specialCharacters);
}
else if(upperCase && numeric) {
  result = upperCase.concat(numeric);
}
else if(upperCase && specialCharacters) {
  result = upperCase.concat(specialCharacters);
}
else if(numeric && specialCharacters) {
  result = numeric.concat(specialCharacters);
}


// this will occur if only 1 prompt is selected
else if(lowerCase){
  result = lowerCase;
}
else if(upperCase) {
 result = upperCase;
}
else if(numeric) {
  result = numeric;
}
else if(specialCharacters) {
  result = specialCharacters;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


