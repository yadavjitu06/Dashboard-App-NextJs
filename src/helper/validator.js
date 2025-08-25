

// Email validator
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
function validateEmail(email) {
  return emailRegex.test(email);
}

// Name validator

const nameRegex = /^[A-Za-z\s]{2,}$/;
function validateName(name) {
  return nameRegex.test(name);
}

//  Export both validators
export { validateEmail, validateName };
