// const form = document.getElementById('form');
// colast = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const password = document.getElementById('password');
// const email = document.getElementById('email-address');
// const claimButton = document.getElementsByClassName('claim-btn');
// const errorMessage = document.getElementsByClassName('error');


const id = (id) => document.getElementById(id);

const classes = (classes) => document.getElementsByClassName(classes);

const form = id('form'),
  firstName = id('first-name'),
  lastName = id('last-name'),
  password = id('password'),
  email = id('email-address'),
  errorMessage = classes('error'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon'),
  claimButton = classes('claim-btn');


form.addEventListener('submit',(event) => {
  event.preventDefault();
 
  logic(firstName, 0, 'First name cannot be empty!');
  logic(lastName, 1, 'Last name cannot be empty!');
  logic(email, 2, 'email cannot be empty!')
  logic(password, 3, 'Password cannot be empty!');

});


let logic = (id, index, message ) => {
  if(id.value.trim() === '' || null) {
    errorMessage[index].innerHTML = message;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
  } else {
    errorMessage[index].innerHTML = '';
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
  }
}

function validate()  {
  const email = document.getElementById('email-address').value;
  const RegExp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

  if(RegExp.text(email) ){
    return true
  } else {
    return false
  }
}

