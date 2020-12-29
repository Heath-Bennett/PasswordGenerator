
//Create Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];

var omit = [];

var phoneticAlpha = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

//Declare Global Variables
var wantSpaces = true;
var whatArray = [];

//Declare constant variables
const optionsValue = document.getElementById("options");
const phoneticValue = document.getElementById("p-alphabet");
const optionBorder = document.getElementById("options-border");
const phoneticBorder = document.getElementById("p-alphabet-border");

//check to determine password version and options user selected
function userOptions(){
  if (optionsValue.hasAttribute("disabled")){
    if (document.getElementById("withSpaces").checked === true){
      wantSpaces = true;
      whatArray = whatArray.concat(phoneticAlpha);
    }
    else{
      wantSpaces = false;
      whatArray = whatArray.concat(phoneticAlpha);
    }
  }
  else{
    if(document.getElementById("lowercase").checked === true && document.getElementById("uppercase").checked === true && document.getElementById("numeric").checked === true && document.getElementById("special").checked === true){
      whatArray = whatArray.concat(lowercase, uppercase, numbers, special);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("uppercase").checked === true && document.getElementById("special").checked === true) {
      whatArray = whatArray.concat(lowercase, uppercase, special);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("uppercase").checked === true && document.getElementById("numeric").checked === true) {
      whatArray = whatArray.concat(lowercase, uppercase, numbers);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("numeric").checked === true && document.getElementById("special").checked === true) {
      whatArray = whatArray.concat(lowercase, numbers, special);
    }
    else if(document.getElementById("uppercase").checked === true && document.getElementById("special").checked === true && document.getElementById("numeric").checked === true) {
      whatArray = whatArray.concat(uppercase, special, numbers);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("uppercase").checked === true){
      whatArray = whatArray.concat(lowercase, uppercase);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("special").checked === true){
      whatArray = whatArray.concat(lowercase, special);
    }
    else if(document.getElementById("lowercase").checked === true && document.getElementById("numeric").checked === true){
      whatArray = whatArray.concat(lowercase, numbers);
    }
    else if(document.getElementById("uppercase").checked === true && document.getElementById("special").checked === true){
      whatArray = whatArray.concat(uppercase, special);
    }
    else if(document.getElementById("uppercase").checked === true && document.getElementById("numeric").checked === true){
      whatArray = whatArray.concat(uppercase, numbers);
    }
    else if(document.getElementById("special").checked === true && document.getElementById("numeric").checked === true){
      whatArray = whatArray.concat(special, numbers);
    }
    else if(document.getElementById("lowercase").checked === true){
      whatArray = whatArray.concat(lowercase);
    }
    else if(document.getElementById("uppercase").checked === true){
      whatArray = whatArray.concat(uppercase);
    }
    else if(document.getElementById("special").checked === true){
      whatArray = whatArray.concat(special);
    }
    else{
      whatArray = whatArray.concat(numbers);
    }

    if (document.getElementById("omitChar").checked === true) {
      omitCharacters();
    }
  }
}

//This function prompts users for the characters they would like to omit
function omitCharacters(){
  let anotherCharacter = true;
  while (anotherCharacter === true){
    let userPrompt = prompt("What character would you like to omit?", "enter one at a time");
    
    if (userPrompt.length !== 1){
      while (userPrompt.length !== 1){
        userPrompt = prompt("You did not enter one character.  Please try again.");
      }
    }
    else {
      omit.push(userPrompt);
      anotherCharacter = confirm("Would you like to omit another character?");
    }
  }
}

//This function handles the word entered by user for phonetic alphabet
function userWord(){
  
}

//Checks to see if the option form is disabled if it is it enables it and disables phonetic alphabet and Vise versa. 
function toggleDisabled(){

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

//Displays the value chose by user
function updateOutput (){
  const x = document.getElementById("charValue");
  const y = document.getElementById("customRange2").value;
  console.log(x.value);
  x.innerHTML = y;
}

function displayResults() {
  userOptions();

  for (let i = 0; i < whatArray.length; i++){
    console.log(whatArray[i]);
  }
  console.log(wantSpaces);
  whatArray = [];
  wantSpaces = true;
}



//Checks to see if the password length is changing
document.getElementById("customRange2").addEventListener("change", updateOutput);


//Checks to see if the toggle between options and phonetic alphabet button has been clicked
document.getElementById("toggle").addEventListener("click", toggleDisabled);

document.getElementById("new-password").addEventListener("click", displayResults);



