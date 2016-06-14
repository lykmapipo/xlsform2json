'use strict';

//dependencies
// var async = require('async');
var _ = require('lodash');

function parseBoolean(bool) {
    //convert bool string to lowercase
    bool = (bool || '').toLowerCase();

    //detect true and covert it to js type
    if (bool &&
        (_.startsWith(bool, 'true') ||
            _.startsWith(bool, 'yes'))) {
        bool = true;
    }

    //detect false and convert it to js type
    if (bool &&
        (_.startsWith(bool, 'false') ||
            _.startsWith(bool, 'no'))) {
        bool = false;
    }

    return bool;
}

function required(question) {
    //TODO handle expressions
    if (question.required) {
        question.required = parseBoolean(question.required);
    } else {
        question.required = false;
    }

    return question;
}

function readonly(question) {
    //TODO handle expressions
    /*jshint camelcase:false*/
    if (question.read_only) {
        question.readonly = parseBoolean(question.read_only);
        //delete read_only from a question
        // delete question.read_only;
        /*jshint camelcase:true*/
    } else {
        question.readonly = false;
    }

    return question;
}


module.exports = exports = function normalize(questionnaire, done) {
    try {
        //TODO parallelize
        questionnaire.questions =
            _.map(questionnaire.questions, required);
        questionnaire.questions =
            _.map(questionnaire.questions, readonly);

        return done(null, questionnaire);
    } catch (e) {
        return done(e);
    }
};