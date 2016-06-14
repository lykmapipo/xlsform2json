'use strict';

//dependencies
var path = require('path');
var _ = require('lodash');
var async = require('async');
var workbook = require(path.join(__dirname, 'lib', 'workbook'));
var sheet = require(path.join(__dirname, 'lib', 'sheet'));
var questionnaire = require(path.join(__dirname, 'lib', 'questionnaire'));

function xlsform2json(source, done) {
    //normalize arguments
    if (_.isFunction(source)) {
        done = source;
        source = undefined;
    }

    //ensure source is provided
    if (!source) {
        return done(new Error('Unknown datasource'));
    }

    //try read excel source from multiple source
    async.waterfall([

        function readWorkbook(next) {
            workbook.read(source, next);
        },

        function obtainXLSFormSheets(workbook, next) {
            sheet.sheets(workbook, function(error, _sheets) {
                var xlsform = _.merge({}, {
                    workbook: workbook
                }, _sheets);

                next(error, xlsform);
            });
        },
        
        function parseXLSFormToJSONForm(xlsform, next) {
            questionnaire(xlsform, next);
        }

    ], done);
}

//export xlsform template
module.exports = exports = xlsform2json;