'use strict';

//dependencies
var async = require('async');
var xlsx = require('xlsx');

//excel source readers
exports.readBinaryString = function readBinaryString(source, next) {
    try {
        var workbook = xlsx.read(source, {
            type: 'binary'
        });
        next(null, workbook);
    } catch (e) {
        next(e);
    }
};

exports.readBase64 = function readBase64(source, next) {
    try {
        var workbook = xlsx.read(source, {
            type: 'base64'
        });
        next(null, workbook);
    } catch (e) {
        next(e);
    }
};

exports.readBuffer = function readBuffer(source, next) {
    try {
        var workbook = xlsx.read(source, {
            type: 'buffer'
        });
        next(null, workbook);
    } catch (e) {
        next(e);
    }
};

exports.readArray = function readArray(source, next) {
    try {
        var workbook = xlsx.read(source, {
            type: 'array'
        });
        next(null, workbook);
    } catch (e) {
        next(e);
    }
};

exports.readFile = function readFile(source, next) {
    try {
        var workbook = xlsx.readFile(source);
        next(null, workbook);
    } catch (e) {
        next(e);
    }
};

exports.read = function read(source, done) {
    //read excel from multiple source
    async.parallel({
        string: function readFromString(next) {
            exports.readBinaryString(source, function(error, workbook) {
                next(null, workbook);
            });
        },
        base64: function readFromBase64(next) {
            exports.readBase64(source, function(error, workbook) {
                next(null, workbook);
            });
        },
        buffer: function readFromBuffer(next) {
            exports.readBuffer(source, function(error, workbook) {
                next(null, workbook);
            });
        },
        array: function readFromArray(next) {
            exports.readArray(source, function(error, workbook) {
                next(null, workbook);
            });
        },
        file: function readFromFile(next) {
            exports.readFile(source, function(error, workbook) {
                next(null, workbook);
            });
        }
    }, function(error, result) {
        if (error) {
            return done(error);
        } else {
            var workbook =
                (result.string || result.base64 || result.buffer ||
                    result.array || result.file);
            if (!workbook) {
                return done(new Error('Invalid datasource'));
            } else {
                return done(null, workbook);
            }
        }
    });
};