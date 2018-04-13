'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FIELDS = undefined;
exports.validator = validator;

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELDS = exports.FIELDS = {
    DOMAIN: 'DOMAIN',
    EMAIL: 'EMAIL',
    PHONENUMBER: 'PHONENUMBER',
    TEXT: 'TEXT',
    NUMBER: 'NUMBER'
};
function validate(errors, field, check) {
    var key = field.key;var value = field.value;var isValid = true;
    if (value === null || !value) {
        errors[key] = key + ' ' + check.onEmpty;isValid = false;
    } else if (isValid && check.regex && !new RegExp(check.regex).test(value)) {
        errors[key] = key + ' ' + check.notValid;isValid = false;
    } else {
        errors[key] = '';isValid = true;
    }
    return { errors: errors, isValid: isValid };
}

function validator(fieldValues) {
    var errors={};
    var isValid = true;
    var response = { errors: '', isValid: true };
    fieldValues.map(function (field) {
        switch (field.type) {
            case FIELDS.DOMAIN:
                response = validate(errors, field, _rules2.default.Domain);
                break;
            case FIELDS.EMAIL:
                response = validate(errors, field, _rules2.default.Email);
                break;
            case FIELDS.TEXT:
                response = validate(errors, field, _rules2.default.Text);
                break;
            case FIELDS.PHONENUMBER:
                response = validate(errors, field, _rules2.default.Phonenumber);
                break;
            case FIELDS.NUMBER:
                response = validate(errors, field, _rules2.default.Number);
                break;
            default:
                break;
        }
        if (!response.isValid) {
            isValid = false;
        }
    });
    return { errors: response.errors, isValid: isValid };
}