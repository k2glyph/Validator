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
        onEmpty: 'Email ' + defaultMessage.onEmpty,
        notValid: 'Email ' + defaultMessage.notValid
    },
    Domain: {
        regex: /^[\w]*\.[a-z]{2,6}$/,
        onEmpty: 'Domain ' + defaultMessage.onEmpty,
        notValid: 'Domain ' + defaultMessage.notValid
    },
    Phonenumber: {
        regex: /^[\d]{10,12}$/,
        onEmpty: 'Phone Number ' + defaultMessage.onEmpty,
        notValid: 'Phone Number ' + defaultMessage.notValid
    },
    Text: {
        onEmpty: 'Text ' + defaultMessage.onEmpty
    },
    Number: {
        regex: /^\d+$/,
        onEmpty: 'Number '+ defaultMessage.onEmpty,
        notValid: 'Number '+ defaultMessage.notValid
    }

};
exports.default = rules;