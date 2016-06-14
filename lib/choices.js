'use strict';

//dependencies
var async = require('async');
var _ = require('lodash');

module.exports = exports = function(questionnaire, choices, done) {

    async.waterfall([
        function groupByListName(next) {
            //group choices base on list name
            var _choices = _.groupBy(choices, 'list_name');

            //remove list name
            _.forEach(_choices, function(options, listName) {
                _choices[listName] = _.map(options, function(option) {
                    //TODO try to pre code choices
                    return _.omit(option, 'list_name');
                });
            });

            next(null, _choices);
        }
    ], function(error, _choices) {
        if (error) {
            done(error);
        } else {
            questionnaire.choices = _choices;
            done(null, questionnaire);
        }
    });
};