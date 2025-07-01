'use strict';

var expect = require('chai').expect;
var FIELDS = require('../index').FIELDS;
var validator=require('../index').validator;
describe('#Validate', function() {
    it('Expected Phone Number is Required', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'' }]
        var response = validator(fieldValues);
        expect(response.errors.sender).to.equal('sender is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Phone Number is Required By value undefined', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:undefined }]
        var response = validator(fieldValues);
        expect(response.errors.sender).to.equal('sender is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Phone Number is Required By value null', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:null }]
        var response = validator(fieldValues);
        expect(response.errors.sender).to.equal('sender is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected no error while type is null || undefined', function() {
        var fieldValues= [{ key: 'sender', type: null, value:null }]
        var response = validator(fieldValues);
        expect(response.errors).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Phone Number is not valid', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'98' }]
        var response = validator(fieldValues);
        expect(response.errors.sender).to.equal('sender is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Phone Number is valid', function() {
        var fieldValues= [{ key: 'sender', type: FIELDS.PHONENUMBER, value:'9814877178' }]
        var response = validator(fieldValues);
        expect(response.errors.sender).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Message Text is Required', function() {
        var fieldValues= [{ key: 'message', type: FIELDS.TEXT, value:'' }]
        var response = validator(fieldValues);
        expect(response.errors.message).to.equal('message is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Message Text is valid', function() {
        var fieldValues= [{ key: 'message', type: FIELDS.TEXT, value:'Hello,' }]
        var response = validator(fieldValues);
        expect(response.errors.message).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Email is not valid', function() {
        var fieldValues= [{ key: 'Email', type: FIELDS.EMAIL, value:'nepall' }]
        var response = validator(fieldValues);
        expect(response.errors.Email).to.equal('Email is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Email is valid', function() {
        var fieldValues= [{ key: 'Email', type: FIELDS.EMAIL, value:'medineshkatwal@gmail.com' }]
        var response = validator(fieldValues);
        expect(response.errors.Email).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Domain is not valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.DOMAIN, value:'nepall' }]
        var response = validator(fieldValues);
        expect(response.errors.Domain).to.equal('Domain is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Domain is valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.DOMAIN, value:'nepallink.net' }]
        var response = validator(fieldValues);
        expect(response.errors.Domain).to.equal('');
        expect(response.isValid).to.equal(true);
    });
   
    it('Expected Number is Required', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.NUMBER, value: null }]
        var response = validator(fieldValues);
        expect(response.errors.Domain).to.equal('Domain is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Number is not valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.NUMBER, value: 'null' }]
        var response = validator(fieldValues);
        expect(response.errors.Domain).to.equal('Domain is not valid');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Number is valid', function() {
        var fieldValues= [{ key: 'Domain', type: FIELDS.NUMBER, value: 10000 }]
        var response = validator(fieldValues);
        expect(response.errors.Domain).to.equal('');
        expect(response.isValid).to.equal(true);
    });
    it('Expected Password is Required', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('Password is Required');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Password is not valid (too short)', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'Pass1' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Password is not valid (no uppercase)', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'password123' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Password is not valid (no lowercase)', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'PASSWORD123' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Password is not valid (no number)', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'PasswordAbc' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
        expect(response.isValid).to.equal(false);
    });
    it('Expected Password is valid', function() {
        var fieldValues= [{ key: 'Password', type: FIELDS.PASSWORD, value:'Password123' }]
        var response = validator(fieldValues);
        expect(response.errors.Password).to.equal('');
        expect(response.isValid).to.equal(true);
    });
   
});