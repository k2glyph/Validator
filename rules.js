'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultMessage = {
    onEmpty: 'is Required',
    notValid: 'is not valid'
};
var rules = {
    Email: {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        onEmpty: defaultMessage.onEmpty,
        notValid: defaultMessage.notValid
    },
    Domain: {
        regex: /^[\w]*\.[a-z]{2,6}$/,
        onEmpty: defaultMessage.onEmpty,
        notValid: defaultMessage.notValid
    },
    Phonenumber: {
        regex: /^[\d]{10,12}$/,
        onEmpty:  defaultMessage.onEmpty,
        notValid: defaultMessage.notValid
    },
    Text: {
        onEmpty: defaultMessage.onEmpty
    },
    Number: {
        regex: /^\d+$/,
        onEmpty: defaultMessage.onEmpty,
        notValid: defaultMessage.notValid
    },
    Password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        onEmpty: defaultMessage.onEmpty,
        notValid: 'must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
    }
};
exports.default = rules;