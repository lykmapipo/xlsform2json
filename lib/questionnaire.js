'use strict';

//dependencies
var path = require('path');
var _ = require('lodash');
var async = require('async');
var CONSTANTS = require(path.join(__dirname, 'constants'));
var normalize = require(path.join(__dirname, 'normalize'));
var settings = require(path.join(__dirname, 'settings'));


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
    //TODO parse question group
    //TODO add question number
    //TODO merge choices into questions
    //TODO normalize result fields
    //TODO normalize question fields
    //TODO group choices
    //TODO normalize settings sheet
    async.waterfall([

        function obtainSettings(next) {
            settings(xlsform.settings, next);
        },

        function partitionQuestions(questionnaire, next) {
            try {
                //partition actual questions from meta questions

                //TODO validate question types
                //TODO validate question name & variable naming conversion

                //TODO move to normalization
                var partitions = _.partition(xlsform.survey, function(question) {
                    return _.includes(CONSTANTS.META, question.name);
                });

                //obtain an normalize questionnaire meta questions
                questionnaire.meta = _.map(partitions[0], function(question) {
                    return _.merge({}, question, CONSTANTS.META_QUESTIONS[question.name]);
                });
                questionnaire.questions = partitions[1];

                //add questionnaire structure
                questionnaire.structure = xlsform.survey;

                next(null, questionnaire);

            } catch (e) {
                next(e);
            }
        },

        function normalizeQuestions(questionnaire, next) {
            //normalize actual questionnaire questions
            normalize(questionnaire, next);
        }

    ], done);
};