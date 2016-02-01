'use strict';

var ghpages = require('gh-pages');
var paths = require('./common/paths');

ghpages.publish(paths.app, function (err) {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log('Success finished!');
});
