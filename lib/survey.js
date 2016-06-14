'use strict';


//dependency
var path = require('path');
var _ = require('lodash');
var CONSTANTS = require(path.join(__dirname, 'constants'));

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
        delete question.read_only;
        /*jshint camelcase:true*/
    } else {
        question.readonly = false;
    }

    return question;
}

function type(question) {

    //detect select_single
    if (question.type.match(/select_one/g) ||
        question.type.match(/select_multi/g)) {
        var _parts = question.type.split(' ');
        question.type = _parts[0];
        question.listName = _parts[1];
        //TODO handle other option
    }

    return question;
}

module.exports = exports = function(questionnaire, survey, done) {
    try {
        //partition actual questions from meta questions

        //TODO validate question types
        //TODO validate question name & variable naming conversion

        //TODO move to normalization
        var partitions = _.partition(survey, function(question) {
            return _.includes(CONSTANTS.META, question.name);
        });

        //obtain an normalize questionnaire meta questions
        questionnaire.meta = _.map(partitions[0], function(question) {
            return _.merge({}, question, CONSTANTS.META_QUESTIONS[question.name]);
        });
        questionnaire.questions = partitions[1];

        //add questionnaire structure
        questionnaire.structure = survey;

        //TODO parallelize
        questionnaire.questions =
            _.map(questionnaire.questions, required);
        questionnaire.questions =
            _.map(questionnaire.questions, readonly);
        questionnaire.questions = _.map(questionnaire.questions, type);

        //add choices to a question
        _.forEach(questionnaire.questions, function(question, index) {
            if (question.listName) {
                question.choices = questionnaire.choices[question.listName];
                delete question.listName;
                questionnaire.questions[index] = question;
            }
        });

        return done(null, questionnaire);
    } catch (e) {
        return done(e);
    }
};