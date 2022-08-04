// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//defining variables to hold character sets
var lowerCaseArray =  [ 'a', 'b', 'c', 'd', 'e', "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseArray = [ 'A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'R', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numericArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharactersArray = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var result = [];

var finalPassword = [];

//defining the function generatePassword given in the starter code
function generatePassword() {

  // var characterPool = [];

  var length = prompt("Input the number of characters needed for your password (must be between 8 and 128 characters)");
 
  if (length < 8 && length > 128 ) {
      alert("Password must be between 8 and 128 characters")
  }

  var lowerCase = confirm("Would you like to include lowercase characters in your password?");

  var upperCase = confirm("Would you like to include uppercase characters in your password?");

  var numeric = confirm("Would you like to inlcude numbers in your password?");

  var specialCharacters = confirm("Would you like to include special characters in your password?");

  //this will occur if all the password prompts are selected
if (lowerCase && upperCase && numeric && specialCharacters) {
  result = lowerCaseArray.concat(upperCaseArray, numericArray, specialCharactersArray);
}


//this  will occur if only 3 prompts are selected
else if (lowerCase && upperCase && numeric) {
  result = lowerCaseArray.concat(upperCaseArray, numericArray);
}
else if (lowerCase && upperCase && specialCharacters){
  result = lowerCaseArray.concat(upperCaseArray, specialCharactersArray);
}
else if (lowerCase && numeric && specialCharacters) {
  result = lowerCaseArray.concat(numericArray, specialCharactersArray);
}
else if (upperCase && numeric && specialCharacters) {
  result = upperCaseArray.concat(numericArray, specialCharactersArray);
}


//this will occur if only 2 prompts are selected
else if(lowerCase && upperCase) {
  result = lowerCaseArray.concat(upperCaseArray);
}
else if(lowerCase && numeric) {
  result = lowerCaseArray.concat(numericArray);
}
else if(lowerCase && specialCharacters) {
  result = lowerCaseArray.concat(specialCharactersArray);
}
else if(upperCase && numeric) {
  result = upperCaseArray.concat(numericArray);
}
else if(upperCase && specialCharacters) {
  result = upperCaseArray.concat(specialCharactersArray);
}
else if(numeric && specialCharacters) {
  result = numericArray.concat(specialCharactersArray);
}


// this will occur if only 1 prompt is selected
else if(lowerCase){
  result = lowerCaseArray;
}
else if(upperCase) {
 result = upperCaseArray;
}
else if(numeric) {
  result = numericArray;
}
else if(specialCharacters) {
  result = specialCharactersArray;
}
console.log(result)


for (var i=0; i < length; i++) {
  var characterPool = randomize(result);
  finalPassword.push(characterPool);
}
console.log(finalPassword.join(""));
return finalPassword.join((""));
}

function randomize(array){
  var randomIndex = Math.floor(Math.random()*array.length);
  var indexValue = array[randomIndex];
  return indexValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


