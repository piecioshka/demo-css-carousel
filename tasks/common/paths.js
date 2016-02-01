'use strict';

var path = require('path');

module.exports = {
    app: path.join(__dirname, '..', '..', 'app'),
    styles: {
        css: path.join(__dirname, '..', '..', 'app', 'styles', 'css'),
        sass: path.join(__dirname, '..', '..', 'app', 'styles', 'scss'),
        source: path.join(__dirname, '..', '..', 'app', 'styles', 'scss', 'main.scss'),
        dist: path.join(__dirname, '..', '..', 'app', 'styles', 'css', 'main.css')
    }
};
