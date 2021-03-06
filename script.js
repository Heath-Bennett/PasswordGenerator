
//Create Arrays
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];

var omit = [];

const phoneticAlpha = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

var whatArray = [];

var finalPassword = [];

//Declare Global Variables
var wantSpaces = true;
var inputWord = "";
var password = "";
var randomChar = "";
var passwordLength = document.getElementById("customRange2").value;
var index = 0; 
var currentPassword = "";
var previousPassword = "";
var twoPriorPasswords = "";
var threePriorPasswords = "";
var oldestPasswordKept = "";
var isBlurry = false;


//Declare constant variables
const optionsValue = document.getElementById("options");
const phoneticValue = document.getElementById("p-alphabet");
const optionBorder = document.getElementById("options-border");
const phoneticBorder = document.getElementById("p-alphabet-border");
const passwordCard = document.getElementById("password");
const phoneticWord = document.getElementById("phonetic-word");


//This function determines the type of password the user wants to create.  
function userOptions(){
  let minOneOfFour = true;
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
    if (document.getElementById("lowercase").checked === false && document.getElementById("uppercase").checked === false && document.getElementById("numeric").checked === false && document.getElementById("special").checked === false){
      minOneOfFour = false;
      let pickOne = alert('Please check at least one of the following check boxes: "Lowercase Characters", "Uppercase Characters", "Numeric Character", or "Special Characters".');
      minOneOfFour = true;
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
  let notValid = false;
  let userInput = document.getElementById("phonetic-word").value;
  userInput = userInput.toLowerCase();

  if(/^[a-zA-Z]+$/.test(userInput)){
    notValid= false;
  }
  else{
    notValid = true;
  }

  while (userInput.length > 8 || notValid === true){
    userInput = prompt("Please enter one word 8 letters or less.");  

    if(/^[a-zA-Z]+$/.test(userInput)){
      notValid = false;
    }
    else{
      notValid = true;
    }
    
  }
  inputWord = userInput;
}

//Checks to see if the option form is disabled if it is it enables it and disables phonetic alphabet and Vise versa. 
function toggleDisabled(){

  if (optionsValue.hasAttribute("disabled")){
    optionsValue.removeAttribute("disabled");
    optionBorder.style.border = "2px solid #05F2F2";
    phoneticValue.setAttribute("disabled", true);
    phoneticBorder.style.border = "4px dotted gray";

    
  }
  else {
    optionsValue.setAttribute("disabled", true);
    optionBorder.style.border = "4px dotted gray"
    phoneticValue.removeAttribute("disabled");
    phoneticBorder.style.border = "2px solid #05F2F2";
  }
}

//Displays the length of password chosen by user
function updateOutput (){
  const x = document.getElementById("charValue");
  const y = document.getElementById("customRange2").value;
  x.innerHTML = y;
}

//Generate password to be displayed in the current password card
function generatePassword(){
  passwordLength = document.getElementById("customRange2").value;
  userOptions();
  

  if (optionsValue.hasAttribute("disabled")){
    userWord();
    if (wantSpaces === true){
      for(let i = 0; i < inputWord.length; i++){
        for(let j = 0; j < phoneticAlpha.length; j++){
          if (inputWord[i].charAt(0) === phoneticAlpha[j].charAt(0)){
            finalPassword.push(phoneticAlpha[j]);
          }
        }
      }

      password = finalPassword.join(" ");
    }
    else{
      for(let i = 0; i < inputWord.length; i++){
        for(let j = 0; j < phoneticAlpha.length; j++){
          if (inputWord[i].charAt(0) === phoneticAlpha[j].charAt(0)){
            finalPassword.push(phoneticAlpha[j]);
          }
        }
      }
      password = finalPassword.join("");
    }
  }
  else{
    if (document.getElementById("omitChar").checked === true){

      whatArray = whatArray.filter(function(char){
        return !omit.includes(char);
      });

      createPassword();
      password = finalPassword.join("");
    }
    else{
      createPassword();
      password = finalPassword.join("");
    }
  }
 
  passwordCard.value = password;
  passwordCard.style.filter = "blur(.5rem)";
  isBlurry = true;
  sendToHistory();
  password="";
  finalPassword = [];
  whatArray=[];
  omit = [];
  phoneticWord.value = phoneticWord.defaultValue;
}

//toggles the blur on current password

function toggleBlur(){
  if (isBlurry === true){
    passwordCard.style.filter = "none";
    isBlurry = false;
  }
  else {
    passwordCard.style.filter = "blur(.5rem)";
    isBlurry = true;
  }

}


//Generate a random number between zero and length of the array
function randomNumber(anArray){
  randomChar = anArray[Math.floor(Math.random()*anArray.length)];
  return randomChar;
}

//Generate a random password
function createPassword(){
  let tmpholding = "";

  for (let i = 0; i < passwordLength; i ++){
    tmpholding = randomNumber(whatArray);
    finalPassword.push(tmpholding);
  }
}

//This function determines how many passwords have been generated and copies the current to history and shuffles the rest down
function sendToHistory(){
  switch(index){
    case 0:
      currentPassword = password;
      document.getElementById("currPassLabel").innerHTML = abbrvPassword(currentPassword);
      index ++;
      break;
    case 1:
      previousPassword = currentPassword;
      currentPassword = password; 
      document.getElementById("prePassLabel").innerHTML = abbrvPassword(previousPassword);
      document.getElementById("currPassLabel").innerHTML = abbrvPassword(currentPassword);  
      index ++;
      break;
    case 2:
      twoPriorPasswords = previousPassword;
      previousPassword = currentPassword;
      currentPassword = password;
      document.getElementById("twoPriorLabel").innerHTML = abbrvPassword(twoPriorPasswords);
      document.getElementById("prePassLabel").innerHTML = abbrvPassword(previousPassword);
      document.getElementById("currPassLabel").innerHTML = abbrvPassword(currentPassword);
      index++;
      break;
    case 3:
      threePriorPasswords = twoPriorPasswords;
      twoPriorPasswords = previousPassword;
      previousPassword = currentPassword;
      currentPassword = password;
      document.getElementById("threePriorLabel").innerHTML = abbrvPassword(threePriorPasswords);
      document.getElementById("twoPriorLabel").innerHTML = abbrvPassword(twoPriorPasswords);
      document.getElementById("prePassLabel").innerHTML = abbrvPassword(previousPassword);
      document.getElementById("currPassLabel").innerHTML = abbrvPassword(currentPassword);
      index++;
      break;
    case 4:
      oldestPasswordKept = threePriorPasswords;
      threePriorPasswords = twoPriorPasswords;
      twoPriorPasswords = previousPassword;
      previousPassword = currentPassword;
      currentPassword = password;
      document.getElementById("oldPassLabel").innerHTML=abbrvPassword(oldestPasswordKept);
      document.getElementById("threePriorLabel").innerHTML = abbrvPassword(threePriorPasswords);
      document.getElementById("twoPriorLabel").innerHTML = abbrvPassword(twoPriorPasswords);
      document.getElementById("prePassLabel").innerHTML = abbrvPassword(previousPassword);
      document.getElementById("currPassLabel").innerHTML = abbrvPassword(currentPassword);
      break;
  }


}

//This function abbreviates the password to be displayed in history
function abbrvPassword(passString){
  let tmpPassword = "";

  tmpPassword = passString.slice(0, 3) + "........." + passString.slice(-3);
  
  return tmpPassword;
}

//This function determines which password to copy and calls copy() to copy it
function copyToClipboard(){
  if (document.getElementById("currPass").checked === true){
    copy(currentPassword );
  }
  else if (document.getElementById("prePass").checked === true){
    copy(previousPassword );

  }
  else if (document.getElementById("twoPrior").checked === true){
    copy(twoPriorPasswords);

  }
  else if (document.getElementById("threePrior").checked === true){
    copy(threePriorPasswords);

  }
  else {
    copy(oldestPasswordKept);

  }

  
}

//This takes a password to copy and and a temporary password that holds the current password as input and copies it to the clipboard
function copy(copyPassword){
  let temporaryPassword = passwordCard.value;
  passwordCard.value = copyPassword;
  document.getElementById("password").select();
  document.execCommand("Copy");
  passwordCard.value=temporaryPassword;
  alert("Copied the password: " + copyPassword);
}


//Checks to see if the password length is changing
document.getElementById("customRange2").addEventListener("change", updateOutput);


//Checks to see if the toggle between options and phonetic alphabet button has been clicked
document.getElementById("toggle").addEventListener("click", toggleDisabled);

//Listens for the generate password button to be clicked.
document.getElementById("new-password").addEventListener("click", generatePassword);

//listens for Copy to clipboard button to be pressed
document.getElementById("copy-button").addEventListener("click", copyToClipboard);

//listens for the toggle blur button to be pressed
document.getElementById("blur").addEventListener("click", toggleBlur);


