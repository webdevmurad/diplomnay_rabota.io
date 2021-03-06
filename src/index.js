require('formdata-polyfill');
require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modal = require('./parts/modal'),
        tabs = require('./parts/tabs'),
        timer = require ('./parts/timer'),
        popupWindow = require ('./parts/popupWindow'),
        img = require ('./parts/img');

    modal();
    tabs();
    timer();
    popupWindow();
    img();
});


if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}