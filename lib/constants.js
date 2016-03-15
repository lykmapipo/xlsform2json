'use strict';

/**
 * @name constants
 * @description list of constants used in xlsform2json convertor
 * @type {Object}
 * @return {Object} list of constants
 */

//dependencies
var _ = require('lodash');

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