'use strict';

//dependencies
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var expect = require('chai').expect;
// var sample = path.join(__dirname, 'fixture', 'sample.xls');
var simple = path.join(__dirname, 'fixture', 'simple_questionnaire.xls');
var encrypted = path.join(__dirname, 'fixture', 'encrypted.xlsx');
var noSettings = path.join(__dirname, 'fixture', 'no_settings.xlsx');
// var questionTypes = path.join(__dirname, 'fixture', 'question_types.xlsx');

var xlsform2json = require(path.join(__dirname, '..'));

//xlsform template builder
describe('xlsform2json', function() {

    it('should export a function', function() {
        expect(xlsform2json).to.exist;
        expect(xlsform2json).to.be.a.function;
    });

    describe('datasource', function() {

        it('should throw `Unknown datasource` if excel source not provided', function(done) {
            xlsform2json(function(error) {
                expect(error.message).to.equal('Unknown datasource');
                done();
            });
        });

        it('should throw `Invalid datasource` on unsupported excel source', function(done) {
            xlsform2json('abcd', function(error) {
                expect(error.message).to.equal('Invalid datasource');
                done();
            });
        });

        it('should throw `Missing <name> sheet` on unsupported excel source', function(done) {
            xlsform2json(noSettings, function(error) {
                expect(error.message).to.equal('Missing settings sheet');
                done();
            });
        });

        it('should be able to read a workbook from binary string', function(done) {
            xlsform2json(fs.readFileSync(simple, 'binary'), function(error, result) {
                expect(error).to.not.exist;
                expect(result).to.exist;
                done();
            });
        });

        it('should be able to read a workbook from base64 string', function(done) {
            xlsform2json(fs.readFileSync(simple, 'base64'), function(error, result) {
                expect(error).to.not.exist;
                expect(result).to.exist;
                done();
            });
        });

        it('should be able to read a workbook from buffer', function(done) {
            xlsform2json(fs.readFileSync(simple), function(error, result) {
                expect(error).to.not.exist;
                expect(result).to.exist;
                done();
            });
        });

        it('should be able to read a workbook from array', function(done) {
            xlsform2json(
                fs.readFileSync(simple, 'binary').split('').map(function(x) {
                    return x.charCodeAt(0);
                }),
                function(error, result) {
                    expect(error).to.not.exist;
                    expect(result).to.exist;
                    done();
                });
        });

        it('should be able to read a workbook from a file', function(done) {
            xlsform2json(simple, function(error, result) {
                expect(error).to.not.exist;
                expect(result).to.exist;
                done();
            });
        });

    });

    describe('survey', function() {
        it('should throw error when invalid question type used');
        it('should be able to parse and present questionnaire structure');

    });

    describe('settings', function() {

        it('should be able to obtain settings details', function(done) {
            xlsform2json(encrypted, function(error, result) {

                expect(error).to.not.exist;
                expect(result).to.exist;
                expect(result.settings).to.exist;

                //assert settings
                expect(result.settings.title).to.equal('Party');
                expect(result.settings.id).to.equal('1B22324A340354');
                expect(result.settings.language).to.equal('English');
                expect(result.settings.version).to.equal('1.0.0');
                // jshint quotmark:double
                expect(result.settings.respondent).to.equal("concat(${lname}, '-', ${fname}, '-', uuid())");
                //jshint quotmark:single
                expect(result.settings.submissionUrl).to.exist;
                expect(result.settings.publicKey).to.exist;

                done();
            });
        });

    });


    describe('choices', function() {

        it('should be able to obtain choices details', function(done) {
            xlsform2json(encrypted, function(error, result) {

                console.log(result);

                expect(error).to.not.exist;
                expect(result).to.exist;
                expect(result.choices).to.exist;

                expect(_.get(result.choices, 'yes_no')).to.exist;
                expect(_.get(result.choices, 'browsers')).to.exist;

                done();
            });
        });

    });

});