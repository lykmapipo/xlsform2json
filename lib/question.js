'use strict';

//dependencies

exports.questions = function getQuestions(xlsform, done) {
    try {

        var questions = [];

        //TODO parse survey sheet to obtain question
        //TODO merge choices into questions
        //TODO normalize result fields

        xlsform.questions = questions;

        return done(null, xlsform);

    } catch (e) {
        return done(e);
    }
};