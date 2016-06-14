'use strict';

//dependencise
var _ = require('lodash');
var async = require('async');


function title(settings, done) {
    /*jshint camelcase:false*/
    var _title = _.get(settings, '[0].form_title');
    if (!_title) {
        return done(new Error('Missing questionnaire title'));
    } else {
        return done(null, _title);
    }
    /*jshint camelcase:true*/
}


function id(settings, done) {
    /*jshint camelcase:false*/
    var _id = _.get(settings, '[0].form_id');
    if (!_id || _.isEmpty(_id)) {
        done(new Error('Missing questionnaire id'));
    } else {
        return done(null, _id);
    }
    /*jshint camelcase:true*/
}


function language(settings, done) {
    /*jshint camelcase:false*/
    var _language = _.get(settings, '[0].form_language', 'English');
    if (!_language) {
        done(new Error('Missing questionnaire default language'));
    } else {
        return done(null, _language);
    }
    /*jshint camelcase:true*/
}


function version(settings, done) {
    /*jshint camelcase:false*/
    var _version = _.get(settings, '[0].version', '1.0.0');
    if (!_version) {
        done(new Error('Missing questionnaire version'));
    } else {
        return done(null, _version);
    }
    /*jshint camelcase:true*/
}


function instanceName(settings, done) {
    /*jshint camelcase:false*/
    var _instanceName = _.get(settings, '[0].instance_name', 'Anonymous');
    if (!_instanceName) {
        return done(new Error('Missing questionnaire instance name'));
    } else {
        return done(null, _instanceName);
    }
    /*jshint camelcase:true*/
}


function submissionUrl(settings, done) {
    /*jshint camelcase:false*/
    var _submissionUrl = _.get(settings, '[0].submission_url');
    return done(null, _submissionUrl);
    /*jshint camelcase:true*/
}


function publicKey(settings, done) {
    /*jshint camelcase:false*/
    var _publicKey = _.get(settings, '[0].public_key');
    return done(null, _publicKey);
    /*jshint camelcase:true*/
}

module.exports = exports = function(settings, done) {

    async.parallel({
        id: function(next) {
            id(settings, next);
        },
        title: function(next) {
            title(settings, next);
        },
        language: function(next) {
            language(settings, next);
        },
        version: function(next) {
            version(settings, next);
        },
        respondent: function(next) {
            instanceName(settings, next);
        },
        submissionUrl: function(next) {
            submissionUrl(settings, next);
        },
        publicKey: function(next) {
            publicKey(settings, next);
        }
    }, done);

};