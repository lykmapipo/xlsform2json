'use strict';

//dependencies
var path = require('path');
var _ = require('lodash');
var async = require('async');
var normalize = require(path.join(__dirname, 'normalize'));
var CONSTANTS = require(path.join(__dirname, 'constants'));


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

        function partitionQuestions(next) {
            //partition actual questions from meta questions
            var questionnaire = {};

            var partitions = _.partition(xlsform.survey, function(question) {
                return _.includes(CONSTANTS.META, question.name);
            });

            questionnaire.meta = _.map(partitions[0], function(question) {
                return _.merge({}, question, CONSTANTS.META_QUESTIONS[question.name]);
            });
            questionnaire.questions = partitions[1];

            next(null, questionnaire);
        },

        function normalizeQuestions(questionnaire, next) {
            //normalize questionnaire questions
            normalize(questionnaire, next);
        }

    ], done);
};