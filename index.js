'use strict';

//dependencies
var path = require('path');
var _ = require('lodash');
var workbook = require(path.join(__dirname, 'lib', 'workbook'));

function xlsform2json(source, done) {
    //normalize arguments
    if (_.isFunction(source)) {
        done = source;
        source = undefined;
    }

    //ensure source is provided
    if (!source) {
        return done(new Error('Unknown datasource'));
    }

    //try read excel source from multiple source
    workbook.read(source, done);
}

//export xlsform template
module.exports = exports = xlsform2json;