console.log("The script is injected.");
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
      vid.muted = true;
    }
  } else {
    if (adIsPlaying) {
      console.log('An AD just stopped');
      adIsPlaying = false;
      vid.muted = false;
    }
  }
}, 300);
