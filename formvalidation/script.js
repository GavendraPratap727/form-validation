// Get all the input fields and the form
const form = document.querySelector('form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.phone');
const passwordInput = document.querySelector('.password');
const conPasswordInput = document.querySelector('.con_password');

// Add event listeners
form.addEventListener('submit', validateForm);
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);
conPasswordInput.addEventListener('input', validateConPassword);

// Validation functions
function validateForm(event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validatePhone() && validatePassword() && validateConPassword()) {
    // Form is valid, submit it
    form.submit();
  } else {
    // Form is not valid, display error messages
    alert('Please fill in the form correctly');
  }
}

function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 5) {
    nameInput.style.borderColor = 'ed';
    nameInput.setCustomValidity('Name must be at least 5 characters');
    return false;
  } else {
    nameInput.style.borderColor = '';
    nameInput.setCustomValidity('');
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (!email.includes('@')) {
    emailInput.style.borderColor = 'ed';
    emailInput.setCustomValidity('Invalid email address');
    return false;
  } else {
    emailInput.style.borderColor = '';
    emailInput.setCustomValidity('');
    return true;
  }
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  if (phone.length!== 10) {
    phoneInput.style.borderColor = 'ed';
    phoneInput.setCustomValidity('Phone number must be 10 digits');
    return false;
  } else if (phone === '1234567890') {
    phoneInput.style.borderColor = 'ed';
    phoneInput.setCustomValidity('Phone number cannot be 1234567890');
    return false;
  } else {
    phoneInput.style.borderColor = '';
    phoneInput.setCustomValidity('');
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    passwordInput.style.borderColor = 'ed';
    passwordInput.setCustomValidity('Password must be at least 8 characters');
    return false;
  } else if (password === 'password') {
    passwordInput.style.borderColor = 'ed';
    passwordInput.setCustomValidity('Password cannot be "password"');
    return false;
  } else if (password === nameInput.value.trim()) {
    passwordInput.style.borderColor = 'ed';
    passwordInput.setCustomValidity('Password cannot be the same as your name');
    return false;
  } else {
    passwordInput.style.borderColor = '';
    passwordInput.setCustomValidity('');
    return true;
  }
}

function validateConPassword() {
  const password = passwordInput.value.trim();
  const conPassword = conPasswordInput.value.trim();
  if (password!== conPassword) {
    conPasswordInput.style.borderColor = 'red';
    conPasswordInput.setCustomValidity('Passwords do not match');
    return false;
  } else {
    conPasswordInput.style.borderColor = '';
    conPasswordInput.setCustomValidity('');
    return true;
  }
}