'use strict';

var sass = require('node-sass');
var fs = require('fs-extra');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var paths = require('./paths');

var sassOptions = {
    file: paths.styles.source,
    sourceComments: true,
    outputStyle: 'outputStyle',
    indentWidth: 4
};

var browsers = [
    'Safari 5',
    'Explorer 7',
    'Edge 12',
    'Chrome 30',
    'Firefox 30'
];

var prefixer = autoprefixer({
    add: true,
    browsers: browsers
});

function removeDirectory() {
    return new Promise(function (resolve, reject) {
        fs.remove(paths.styles.css, function (err) {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}

function compileSass() {
    return new Promise(function (resolve, reject) {
        sass.render(sassOptions, function (err, result) {
            if (err) {
                reject(err);
                return;
            }

            resolve(result);
        });
    });
}

function autoPrefix(result) {
    return new Promise(function (resolve, reject) {
        postcss([prefixer]).process(result.css).then(function (result) {
            result.warnings().forEach(function (warn) {
                console.warn(warn.toString());
            });

            resolve(result);
        });
    });
}

function save(result) {
    return new Promise(function (resolve, reject) {
        fs.outputFile(paths.styles.dist, result.css, function (err) {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}

function compile() {
    Promise.resolve()
        .then(removeDirectory)
        .then(compileSass)
        .then(autoPrefix)
        .then(save)
        .then(function () {
            console.log('Build successful. Save to file: ' + paths.styles.dist);
        })
        .catch(function (err) {
            console.log('Ups...');
            console.error(err.formatted);
        });
}

module.exports = {
    compile: compile
};
