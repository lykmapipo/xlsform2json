'use strict';

//dependencies
var _ = require('lodash');
var xlsx = require('xlsx');
var sheetNames = ['survey', 'choices', 'settings'];

exports.sheets = function getXLSFormSheets(workbook, done) {
    try {
        var sheets = {};

        _.forEach(sheetNames, function(sheetName) {
            /*jshint camelcase:false*/
            var sheet = workbook.Sheets[sheetName];
            sheets[sheetName] = xlsx.utils.sheet_to_json(sheet);
            /*jshint camelcase:true*/
        });

        //TODO check if all sheets exists

        return done(null, sheets);
    } catch (e) {
        return done(e);
    }
};