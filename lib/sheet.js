'use strict';

//dependencies
var _ = require('lodash');
var xlsx = require('xlsx');
var sheetNames = ['survey', 'choices', 'settings'];

exports.sheets = function getXLSFormSheets(workbook, done) {
    try {
        var sheets = {};

        _.forEach(sheetNames, function(sheetName) {

            var sheet = workbook.Sheets[sheetName];

            //ensure survey sheet
            //ensure choices sheet
            //ensure settings sheet
            if (!sheet) {
                throw new Error(_.capitalize(sheetName) + ' sheet not found');
            }

            /*jshint camelcase:false*/
            sheets[sheetName] = xlsx.utils.sheet_to_json(sheet);
            /*jshint camelcase:true*/

        });

        //TODO check if all sheets exists

        return done(null, sheets);
    } catch (e) {
        return done(e);
    }
};