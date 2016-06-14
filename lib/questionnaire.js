'use strict';

//dependencies
var path = require('path');
var async = require('async');
var settings = require(path.join(__dirname, 'settings'));
var choices = require(path.join(__dirname, 'choices'));
var survey = require(path.join(__dirname, 'survey'));


/**
 * @name questionnaire
 * @description parse json questionnaire from xlsform sheets
 * @param  {[type]}   xlsform json represented of parsed xlsform
 * @param  {Function} done    a callback to invoke on success or error
 * @return {Object}           
 * @public
 * @function
 */
module.exports = exports = function questionnaire(xlsform, done) {
    //TODO parse survey sheet to obtain question
    //TODO parse simple questions
    //TODO parse question group
    //TODO parse question repeat group
    //TODO add question number
    //TODO merge choices into questions
    //TODO normalize result fields
    //TODO normalize question fields
    //TODO group choices
    //TODO normalize settings sheet
    async.parallel({

        settings: function obtainSettings(next) {
            settings(xlsform.settings, next);
        },

        choices: function obtainChoices(next) {
            choices(xlsform.choices, next);
        }

    }, function obtainSurvey(error, questionnaire) {
        if (error) {
            done(error);
        } else {
            survey(questionnaire, xlsform.survey, done);
        }
    });
};