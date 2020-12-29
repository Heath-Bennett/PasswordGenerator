
//Create Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];

var omit = [];

var allFour = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\" ];

var phoneticAlpha = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

//Declare Global Variables
var wantSpaces = true;

//check to determine password version and options user selected
function userOptions(){
  if (optionsValue.hasAttribute("disabled")){
    if (document.getElementById("withSpaces").checked = true){
      wantSpaces = true;
    }
    else{
      wantSpaces = false;
    }
  }
  else{

  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Checks to see if the password length is changing
document.getElementById("customRange2").addEventListener("change", updateOutput);

//Displays the value chose by user
function updateOutput (){
  const x = document.getElementById("charValue");
  const y = document.getElementById("customRange2").value;
  console.log(x.value);
  x.innerHTML = y;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//Checks to see if the toggle between options and phonetic alphabet button has been clicked
document.getElementById("toggle").addEventListener("click", toggleDisabled);

//Checks to see if the option form is disabled if it is it enables it and disables phonetic alphabet and Vise versa. 
function toggleDisabled(){
  const optionsValue = document.getElementById("options");
  const phoneticValue = document.getElementById("p-alphabet");
  const optionBorder = document.getElementById("options-border");
  const phoneticBorder = document.getElementById("p-alphabet-border");

  if (optionsValue.hasAttribute("disabled")){
    optionsValue.removeAttribute("disabled");
    optionBorder.style.border = "2px solid #05F2F2";
    phoneticValue.setAttribute("disabled", true);
    phoneticBorder.style.border = "2px dashed gray";

    
  }
  else {
    optionsValue.setAttribute("disabled", true);
    optionBorder.style.border = "2px dashed gray"
    phoneticValue.removeAttribute("disabled");
    phoneticBorder.style.border = "2px solid #05F2F2";
  }
}

