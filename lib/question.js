'use strict';

//dependencies

exports.questions = function getQuestions(xlsform, done) {
    try {

        var questions = [];

        //TODO parse survey sheet to obtain question
        //TODO parse question group
        //TODO add question number
        //TODO merge choices into questions
        //TODO normalize result fields
        //TODO normalize question fields
        //TODO group choices
        //TODO normalize settings sheet

        xlsform.questions = questions;

        return done(null, xlsform);

    } catch (e) {
        return done(e);
    }
};