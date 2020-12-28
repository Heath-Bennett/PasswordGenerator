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


document.getElementById("toggle").addEventListener("click", toggleDisabled);


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

