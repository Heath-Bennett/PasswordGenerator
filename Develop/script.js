// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

document.getElementById("customRange2").addEventListener("change", updateOutput);

function updateOutput (){
  // document.getElementByTagName("output").value = document.getElementById("customRange2").value;
  const x = document.getElementById("charValue");
  const y = document.getElementById("customRange2").value;
  console.log(x.value);
  x.innerHTML = y;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


document.getElementById("copied").addEventListener("click", toggleDisabled);


function toggleDisabled(){
  document.getElementById("options").removeAttribute("disabled");
  console.log("event heard")
}

function toggleEnabled(){
  document.getElementById("options").setAttribute("disabled", true);
}