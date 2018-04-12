'use strict';

var expect = require('chai').expect;
var _index = require('../index');

describe('#Validate', function() {
    var FIELDS=_index.FIELDS;
    var validator=_index.validator;
    it('Expected Phone Number is Required', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'' }]
        var response = validator(fieldValues, {});
        expect(response.errors.sender).to.equal('sender Phone Number is Required');
    });
    it('Expected Message Text is Required', function() {
        var fieldValues= [{ key: 'message', type: FIELDS.TEXT, value:'' }]
        var response = validator(fieldValues, {});
        expect(response.errors.message).to.equal('message Text is Required');
    });
    it('Expected Email is not valid', function() {
        var fieldValues= [{ key: 'Email', type: FIELDS.EMAIL, value:'nepall' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Email).to.equal('Email Email is not valid');
    });
    it('Expected Domain is not valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.DOMAIN, value:'nepall' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Domain).to.equal('Domain Domain is not valid');
    });
});