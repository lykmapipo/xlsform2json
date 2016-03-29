'use strict';

/**
 * @name constants
 * @description list of constants used in xlsform2json convertor
 * @type {Object}
 * @return {Object} list of constants
 */

//dependencies
var _ = require('lodash');

//questionnaire meta questions
exports.META_QUESTIONS = {
    // start date and time of the survey
    start: {
        name: 'start',
        type: 'datetime'
    },

    //end date and time of the survey
    end: {
        name: 'end',
        type: 'datetime'
    },

    //  day of the survey
    today: {
        name: 'today',
        type: 'date'
    },

    //MEI (International Mobile Equipment Identity)
    deviceid: {
        name: 'deviceid',
        type: 'text'
    },

    //IMSI (International Mobile Subscriber Identity)
    subscriberid: {
        name: 'subscriberid',
        type: 'text'
    },

    //Get the user name (set in ODK settings)
    username: {
        name: 'username',
        type: 'text'
    },

    //SIM serial number
    simserial: {
        name: 'simserial',
        type: 'text',
    },

    // Phone number (if available)
    phonenumber: {
        name: 'phonenumber',
        type: 'text'
    }
};

exports.META = _.map(exports.META_QUESTIONS, 'name');
console.log(exports.META);

/*jshint camelcase:false*/
exports.SETTING_FIELDS = {
    // title displayed at beginning of form, in form list
    form_title: {
        name: 'title'
    },

    //id used in the XForm and often needs to be unique to identify form
    form_id: {
        name: 'id'
    },

    //public key required for encrypted forms
    public_key: {
        name: 'key'
    },

    //specific URL for uploading data, overrides ODK settings
    submission_url: {
        name: 'url'
    },

    //If form uses multiple languages, this one sets which to use by default
    default_language: {
        name: 'language'
    },

    //form version
    version: {
        name: 'version'
    },

    //	allows user to create a dynamic naming convention for each submitted instance
    instance_name: {
        name: 'instance'
    }
    //TODO add other applicable setting fields
};
/*jshint camelcase:true*/

exports.SETTINGS = _.map(exports.SETTINGS_FIELDS, 'name');