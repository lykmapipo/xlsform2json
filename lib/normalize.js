'use strict';

//dependencies
// var async = require('async');
var _ = require('lodash');

exports.parseBoolean = function(bool) {
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
};

exports.required = function(question) {
    //TODO handle expressions
    if (question.required) {
        question.required = exports.parseBoolean(question.required);
    } else {
        question.required = false;
    }

    return question;
};

exports.readonly = function(question) {
    //TODO handle expressions
    if (question.readonly) {
        question.readonly = exports.parseBoolean(question.readonly);
    } else {
        question.readonly = false;
    }

    return question;
};


exports.normalize = function(questions, done) {
    try {
        questions = _.map(questions, exports.required);
        questions = _.map(questions, exports.readonly);
        return done(null, questions);
    } catch (e) {
        return done(e);
    }
};