console.log("The youtube script is injected.");

if (adMuteInterval) {
  clearInterval(adMuteInterval);
}

var adIsPlaying = false;
var toListen = document.getElementById('movie_player');

var adMuteInterval = setInterval(function() {
  var vid = document.getElementsByTagName('video')[0];
  vid.setAttribute('id', 'quiet-please');

  if (toListen.className.includes('ad-interrupting')) {
    if (!vid.muted) {
      console.log('An AD started playing!');
      adIsPlaying = true;
      mute(vid);
    }
  } else {
    if (adIsPlaying) {
      console.log('An AD just stopped');
      adIsPlaying = false;
      unmute(vid)
    }
  }
}, 300);

function mute(video) {
  video.muted = true;
}

function unmute(video) {
  video.muted = false;
}
