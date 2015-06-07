'use strict';

(function (global) {

var util = {
  GetScreenOrientation: function () {
    switch (window.screen.orientation || window.screen.mozOrientation) {
      case 'landscape-primary':
        return 90;
      case 'landscape-secondary':
        return -90;
      case 'portrait-secondary':
        return 180;
      case 'portrait-primary':
        return 0;
    }
    if (window.orientation !== undefined) {
      return window.orientation;
    }
  },
  vibrate: function (ms) {
    if(window.navigator.vibrate) {
      return window.navigator.vibrate(ms);
    } else if(window.navigator.webkitVibrate) {
      return window.navigator.webkitVibrate(ms);
    } else if(window.navigator.mozVibrate) {
      return window.navigator.mozVibrate(ms);
    } else {
      return false;
    }
  },
  getParameterByName: function (name) {
    // props to this SO Q/A
    // http://stackoverflow.com/questions/901115
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ?
      '' :
      decodeURIComponent(results[1].replace(/\+/g, ' '));
  },
  makeElementFullscreen: function (elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
};

global.util = util;

})(window);
