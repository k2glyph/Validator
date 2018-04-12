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
        expect(response.isValid).to.equal(false);
    });
    it('Expected Phone Number is not valid', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'98' }]
        var response = validator(fieldValues, {});
        expect(response.errors.sender).to.equal('sender Phone Number is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Phone Number is valid', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'9814877178' }]
        var response = validator(fieldValues, {});
        expect(response.errors.sender).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Message Text is Required', function() {
        var fieldValues= [{ key: 'message', type: FIELDS.TEXT, value:'' }]
        var response = validator(fieldValues, {});
        expect(response.errors.message).to.equal('message Text is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Message Text is valid', function() {
        var fieldValues= [{ key: 'message', type: FIELDS.TEXT, value:'Hello,' }]
        var response = validator(fieldValues, {});
        expect(response.errors.message).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Email is not valid', function() {
        var fieldValues= [{ key: 'Email', type: FIELDS.EMAIL, value:'nepall' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Email).to.equal('Email Email is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Email is valid', function() {
        var fieldValues= [{ key: 'Email', type: FIELDS.EMAIL, value:'medineshkatwal@gmail.com' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Email).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Domain is not valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.DOMAIN, value:'nepall' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Domain).to.equal('Domain Domain is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Domain is valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.DOMAIN, value:'nepallink.net' }]
        var response = validator(fieldValues, {});
        expect(response.errors.Domain).to.equal('');
        expect(response.isValid).to.equal(true);
    });
   
});