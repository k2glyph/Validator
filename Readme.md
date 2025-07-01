Client-Side-Validator [![Build Status](https://travis-ci.org/k2glyph/Validator.svg?branch=master)](https://travis-ci.org/k2glyph/Validator)
======================

A small library for validation stuff.

## Feature:
1. Domain Validation
2. Email Validation
3. Text Validation
4. Phone Number Validation
5. Number Validation
6. Password Validation (checks for minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)

## Installation
`npm install client-side-validator`
or 
`yarn add client-side-validator`
## Usage

### ES5
```
var clientSideValidator = require("client-side-validator");

var FIELDS=clientSideValidator.FIELDS;
var validator=clientSideValidator.validator;
var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'98' },{ key: 'email', type: FIELDS.EMAIL, value:'medineshkatwal@gmail.com' }]
var response = validator(fieldValues);
console.log(response)
```
### ES6
```
import { validator, FIELDS } from 'client-side-validator';

const fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'98' },{ key: 'email', type: FIELDS.EMAIL, value:'medineshkatwal@gmail.com' }]
const response = validator(fieldValues);
console.log(response)
```

## Tests

  `npm test`

## Contributing

