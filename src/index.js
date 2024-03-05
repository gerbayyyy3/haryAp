// haryAp.js

const haryAp = {
  // Validate email address
  validateEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  // Validate URL
  validateURL: (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  },

  // Validate if a string is alphanumeric
  validateAlphaNumeric: (input) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
  },

  // Validate if a string is a number
  validateNumber: (input) => {
    return !isNaN(input) && !isNaN(parseFloat(input));
  },

  // Validate if a string is empty or not
  validateNotEmpty: (input) => {
    return input.trim().length > 0;
  },

  // Validate if a string has minimum length
  validateMinLength: (input, minLength) => {
    return input.length >= minLength;
  },

  // Validate if a string has maximum length
  validateMaxLength: (input, maxLength) => {
    return input.length <= maxLength;
  }
};

module.exports = haryAp;
