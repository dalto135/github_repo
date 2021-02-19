var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissiom
  var userObject = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }
  // TODO: Set new submission to local storage 
  strObject = JSON.stringify(userObject);
  localStorage.setItem("object", strObject);

  var object = JSON.parse(localStorage.getItem("object"));
  console.log(object);
});