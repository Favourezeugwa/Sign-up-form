const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const email = document.getElementById('email-address');

const errorMessage = document.getElementsByClassName('error');
const claimButton = document.getElementsByClassName('claim-btn');
const successIcon = document.getElementsByClassName('success-icon')
const failureIcon = document.getElementsByClassName('failure-icon')



form.addEventListener('submit',(event) => {
  event.preventDefault();
 
  NameValidation( 0, 'First name cannot be empty!');
  lastNameValidation( 1, 'Last name cannot be empty!');
  emailValidation( 2, 'Email doesn not seem to be valid!');
  passwordValidation( 3, 'Password must be more than 8 characters!');
});


function NameValidation(index, message) {
  const firstNameValue = firstName.value.trim();

  if(firstNameValue === '' || null) {
    errorMessage[index].innerHTML = message;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
  } else {
    errorMessage[index].innerHTML = '';
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
  }
}

function lastNameValidation(index, message) {
  const lastNameValue = lastName.value.trim();

  if(lastNameValue === '' || null) {
    errorMessage[index].innerHTML = message;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
  } else {
    errorMessage[index].innerHTML = '';
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
  }
}

function emailValidation(index, message) {
  const emailValue = email.value.trim();
  const RegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(emailValue.match(RegExp)) {
    errorMessage[index].innerHTML = '';
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
  } else {
    errorMessage[index].innerHTML = message;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
  }
}

function passwordValidation(index, message) {
  const passwordValue = password.value.trim();

  if(passwordValue === '' || passwordValue.length < 8) {
    errorMessage[index].innerHTML = message;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
  } else {
    errorMessage[index].innerHTML = '';
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
  }
}





