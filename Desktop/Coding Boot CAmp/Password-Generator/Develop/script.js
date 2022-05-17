// When user clicks on "Generate Password"
// They click on the "generate password" and it should prompt them for special characters, numbers and letters
// Each var they choose should have up to 8 characters each.
// Depending on what they want in their password they will be randomly generated a password.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var specialNumbers = ["!,@,#,%,^,&,*"];
var numbers = ["1,2,3,4,5,6,7,8"]
var letters = ["q,w,e,r,t,y,u,i"]

function writePassword() {
  var password = generatePassword();
  window.confirm(specialNumbers);
  window.confirm(numbers);
  window.confirm(letters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
