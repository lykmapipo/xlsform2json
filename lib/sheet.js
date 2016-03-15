'use strict';

//dependencies
var xlsx = require('xlsx');
var async = require('async');

//constants
var SURVEY_SHEET_NAME = 'survey';
var CHOICES_SHEET_NAME = 'choices';
var SETTINGS_SHEET_NAME = 'settings';

exports.sheets = function getXLSFormSheets(workbook, done) {
    try {

        async.parallel({

            survey: function(next) {
                //ensure survey sheet
                /*jshint camelcase:false*/
                var survey = workbook.Sheets[SURVEY_SHEET_NAME];
                if (!survey) {
                    next(new Error('Missing ' + SURVEY_SHEET_NAME + ' sheet'));
                } else {
                    next(null, xlsx.utils.sheet_to_json(survey));
                }
                /*jshint camelcase:true*/
            },

            choices: function(next) {
                //ensure choices sheet
                /*jshint camelcase:false*/
                var choices = workbook.Sheets[CHOICES_SHEET_NAME];
                if (!choices) {
                    next(new Error('Missing ' + CHOICES_SHEET_NAME + ' sheet'));
                } else {
                    next(null, xlsx.utils.sheet_to_json(choices));
                }
                /*jshint camelcase:true*/
            },

            settings: function(next) {
                //ensure settings sheet
                /*jshint camelcase:false*/
                var settings = workbook.Sheets[SETTINGS_SHEET_NAME];
                if (!settings) {
                    next(new Error('Missing ' + SETTINGS_SHEET_NAME + ' sheet'));
                } else {
                    next(null, xlsx.utils.sheet_to_json(settings));
                }
                /*jshint camelcase:true*/
            }

        }, done);

    } catch (e) {
        return done(e);
    }
};