'use strict';

//dependencise
var _ = require('lodash');

function title(settings) {
    /*jshint camelcase:false*/
    var _title = _.get(settings, '[0].form_title');
    if (!title) {
        throw new Error('Missing questionnaire title');
    } else {
        return _title;
    }
    /*jshint camelcase:true*/
}

function id(settings) {
    /*jshint camelcase:false*/
    var _id = _.get(settings, '[0].form_id');
    if (!id) {
        throw new Error('Missing questionnaire id');
    } else {
        return _id;
    }
    /*jshint camelcase:true*/
}

function language(settings) {
    /*jshint camelcase:false*/
    var _language = _.get(settings, '[0].form_language', 'English');
    if (!language) {
        throw new Error('Missing questionnaire default language');
    } else {
        return _language;
    }
    /*jshint camelcase:true*/
}

function version(settings) {
    /*jshint camelcase:false*/
    var _version = _.get(settings, '[0].version', '1.0.0');
    if (!version) {
        throw new Error('Missing questionnaire version');
    } else {
        return _version;
    }
    /*jshint camelcase:true*/
}

function instanceName(settings) {
    /*jshint camelcase:false*/
    var _instanceName = _.get(settings, '[0].instance_name', 'Anonymous');
    if (!instanceName) {
        throw new Error('Missing questionnaire instance name');
    } else {
        return _instanceName;
    }
    /*jshint camelcase:true*/
}

function submissionUrl(settings) {
    /*jshint camelcase:false*/
    var _submissionUrl = _.get(settings, '[0].submission_url');
    return _submissionUrl;
    /*jshint camelcase:true*/
}

module.exports = exports = function(settings, next) {
    try {
        //TODO parallelize
        var questionnaire = {};
        questionnaire.title = questionnaire.name = title(settings);
        questionnaire.id = id(settings);
        questionnaire.language = language(settings);
        questionnaire.version = version(settings);
        questionnaire.respondent = instanceName(settings);
        questionnaire.url = submissionUrl(settings);
        next(null, questionnaire);
    } catch (e) {
        next(e);
    }
};