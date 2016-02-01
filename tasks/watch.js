'use strict';

var watch = require('watch');
var sass = require('./common/sass-compile');
var paths = require('./common/paths');

sass.compile();

watch.createMonitor(paths.styles.sass, function (monitor) {
    monitor.on('changed', function () {
        sass.compile();
    });
});
