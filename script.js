// Declaring variables for all possible letters and special characters and putting them into arrays
var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var special = '!@#$%^&*()_+{}~'.split('');
var numbers = '1234567890'.split('');

// Arrays for combing characters and password
var password = [];
var superArray = [];

// Targeting the html elements
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Get password length
var passLength = prompt('Enter your new password length');

// Make sure password length is 1-128 characters
while (passLength < 8 || passLength > 128) {
  alert('Password must be between 8 and 128 characters long!');
  var passLength = prompt('Enter your new password length');
}

// Checking the array length is working
console.log('Password length is: ', passLength)

// Function to ask user for input using confirm boxes to select type of characters they want
// Also checking that user selects at least one option to alert user otherwise
function confirmChar() {
var hasSpecial = confirm('Do you want to use special characters?'); 
var hasNumbers = confirm('Do you want to use numbers?');
var hasUpperCase = confirm('Do you want to use uppcase letters?');
var hasLowerCase = confirm('Do you want to use lowercase letters?');

if (hasSpecial) {
  superArray = superArray.concat(special);
}
if (hasNumbers) {
  superArray = superArray.concat(numbers);
}
if (hasLowerCase) {
  superArray = superArray.concat(lowerCase);
}
if (hasUpperCase) {
  superArray = superArray.concat(upperCase);
}
if (!hasSpecial && !hasNumbers && !hasLowerCase && !hasUpperCase) {
  alert('Please click "Ok" on at least one option!');
  confirmChar();
}};

// Running function
confirmChar();

// Checking the arrays are combined properly 
console.log('Usable Characters ', superArray);

// Creating a RNG to select random characters
for (var i=0; i < passLength; i++) {
  var randomNum = Math.floor(Math.random() * superArray.length);
  password.push(superArray[randomNum]);
}

// Joining array as a string and console logging it
var finalPassword = password.join('');
console.log(finalPassword);

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
  passwordText.value = finalPassword;
});
