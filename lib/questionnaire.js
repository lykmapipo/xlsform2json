'use strict';

//dependencies
var path = require('path');
var normalize = require(path.join(__dirname, 'normalize')).normalize;


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
    normalize(xlsform.survey, function(error, questions) {
        xlsform.questionnaire = questions;
        done(null, xlsform);
    });
};