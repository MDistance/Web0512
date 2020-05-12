'use strict';

var _touchscroll = require('./touchscroll');

document.documentElement.addEventListener('touchstart', function (e) {
    e.preventDefault();
}, {
    passive: false
});

//实例化
new _touchscroll.Touchscroll('#outer', '#inner');