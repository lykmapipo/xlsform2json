'use strict';

/**
 * @name constants
 * @description list of constants used in xlsform2json convertor
 * @type {Object}
 * @return {Object} list of constants
 */

//dependencies
var _ = require('lodash');

//valid questionnaire question types
exports.QUESTION_TYPES = [
    'integer', // Integer (i.e., whole number) input.
    'decimal', // Decimal input.
    'text', //    Free text response.
    'select_one', //Multiple choice question; only one answer can be selected.
    'select_multiple', //Multiple choice question; multiple answers can be selected.
    'note', //Display a note on the screen, takes no input.
    'geopoint', //    Collect a single GPS coordinates.
    'geotrace', //    Record a line of two or more GPS coordinates.
    'geoshape', //    Record a polygon of multiple GPS coordinates; the last point is the same as the first point.
    'date', //    Date input.
    'time', //    Time input.
    'dateTime', //    Accepts a date and a time input.
    'image', //   Take a picture.
    'audio', //   Take an audio recording.
    'video', //   Take a video recording.
    'barcode', // Scan a barcode, requires the barcode scanner app to be installed.
    'calculate', //   Perform a calculation; see the Calculation section below.
    'acknowledge' // Acknowledge prompt that sets value to “OK” if selected.
];

//questionnaire meta questions
exports.META_QUESTIONS = {
    /**
     * @required
     * @description start date and time of the questionnaire
     * @see {@link http://xlsform.org/#metadata|metadata}
     */
    start: {
        name: 'start',
        type: 'datetime'
    },


    /**
     * @required
     * @description end date and time of the questionnaire
     * @see {@link http://xlsform.org/#metadata|metadata}
     */
    end: {
        name: 'end',
        type: 'datetime'
    },

    //day of the questionnaire
    today: {
        name: 'today',
        type: 'date'
    },

    //IMEI (International Mobile Equipment Identity)
    //Browser Fingerprint
    //Machine ID
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
    //Prompt respondent / enumarator to enter
    username: {
        name: 'username',
        type: 'text'
    },

    //SIM serial number (if available)
    simserial: {
        name: 'simserial',
        type: 'text',
    },

    // Phone number (if available)
    // Prompt respondent / enumarator to enter
    phonenumber: {
        name: 'phonenumber',
        type: 'text'
    }
};

exports.META = _.map(exports.META_QUESTIONS, 'name');

/*jshint camelcase:false*/
exports.SETTING_FIELDS = {
    /**
     * @required
     * @description title displayed at beginning of form, in form list.
     * 
     *              The title of the form that is shown to users. 
     *              
     *              The form title is pulled from `form_id` if `form_title`
     *               is blank or missing
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    form_title: {
        name: 'title'
    },


    /**
     * @required
     * @description id used in the XForm and often needs to be unique to identify form.
     * 
     *              The name used to identify the form submission. 
     *              
     *              The form id is pulled from the `XLS file name` if form_id 
     *              is blank or missing.
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    form_id: {
        name: 'id'
    },


    /**
     * @description For encrypted forms, this is where the public key is copied and pasted.
     *              
     *              Public key required for encrypted forms
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    public_key: {
        name: 'key'
    },


    /**
     * @description For encrypted forms, this url specifies the server where 
     *              finalized forms are submitted to
     *              
     *              Specific URL for uploading data, overrides ODK settings
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    submission_url: {
        name: 'url'
    },


    /**
     * @description In localized forms, this sets which language should be used as the default.
     *              
     *              If form uses multiple languages, this one sets which to use by default.
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    default_language: {
        name: 'language'
    },


    /**
     * @required
     * @description form version
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    version: {
        name: 'version'
    },


    /**
     * @required
     * @description allows user to create a dynamic naming convention for each 
     *              submitted instance
     *
     * @see {@link http://xlsform.org/#settings|Settings}
     */
    instance_name: {
        name: 'instance'
    }

    //TODO add other applicable setting fields
};
/*jshint camelcase:true*/

exports.SETTINGS = _.map(exports.SETTINGS_FIELDS, 'name');