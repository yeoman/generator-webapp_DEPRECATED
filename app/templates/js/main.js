'use strict';

function setIframeDimensions () {
  var html = document.getElementsByTagName('html')[0];
  document.getElementById('vrViewer').style.height = html.clientHeight;
  document.getElementById('vrViewer').style.height = html.clintWidth;
}

function fullscreenChange () {
  var notInFullscreen = !document.webkitFullscreenElement &&
                        !document.mozFullscreenElement;
  if(notInFullscreen) {
    var vrViewer = document.getElementById('vrViewer');
    document.getElementById('vrContainer').removeChild(vrViewer);
    window.removeEventListener('orientationchange');
  }
}

function launchVR () {
  var vrContainer = document.getElementById('vrContainer');
  vrContainer.style.display = 'block';

  // create the iframe for the vr experience
  var vrViewer = document.createElement('iframe');
  vrViewer.id = 'vrViewer';
  vrViewer.src = '/vr/';
  vrViewer.height = '100%';
  vrViewer.width = '100%';
  vrViewer.frameBorder = '0';
  vrViewer.scrolling = 'no';
  vrViewer.allowfullscreen = '';
  vrViewer.mozallowfullscreen = '';
  vrViewer.webkitallowfullscreen = '';

  // fix for mobile safari - breaks fullscreen on tap however
  vrViewer.onload = setIframeDimensions;
  window.addEventListener('orientationchange', setIframeDimensions);

  vrContainer.appendChild( vrViewer);

  util.makeElementFullscreen( vrContainer);

  document.addEventListener('webkitfullscreenchange', fullscreenChange);
  document.addEventListener('moxfullscreenchange', fullscreenChange);

}

window.onload = function () {
  document.getElementById('enterVR' ).addEventListener('click', launchVR);
};
