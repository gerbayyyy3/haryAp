# HaryAp

HaryAp is a simple data validation library for JavaScript. It provides various functions to validate common data types such as email addresses, URLs, strings, and numbers.

## Installation

You can install HaryAp via npm. Run the following command in your terminal:

```bash
npm install haryap
```

## Usage

Here's how you can use HaryAp in your JavaScript or Node.js application:

```javascript
const haryAp = require('haryap');

// Validate email
const isValidEmail = haryAp.validateEmail('example@example.com');
console.log('Is valid email:', isValidEmail);

// Validate URL
const isValidURL = haryAp.validateURL('https://example.com');
console.log('Is valid URL:', isValidURL);

// Validate alphanumeric string
const isValidAlphaNumeric = haryAp.validateAlphaNumeric('abc123');
console.log('Is valid alphanumeric:', isValidAlphaNumeric);

// Validate number
const isValidNumber = haryAp.validateNumber('123');
console.log('Is valid number:', isValidNumber);

// Validate non-empty string
const isNotEmpty = haryAp.validateNotEmpty('   ');
console.log('Is not empty:', isNotEmpty);

// Validate minimum length
const isMinLengthValid = haryAp.validateMinLength('hello', 5);
console.log('Is minimum length valid:', isMinLengthValid);

// Validate maximum length
const isMaxLengthValid = haryAp.validateMaxLength('hello', 3);
console.log('Is maximum length valid:', isMaxLengthValid);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
