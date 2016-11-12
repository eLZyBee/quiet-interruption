console.log("The twitch script is injected");

if (adMuteInterval) {
  clearInterval(adMuteInterval);
}

var adIsPlaying = false;

var adMuteInterval = setInterval(function() {
  var toListen = document.getElementById('player');

  if (toListen.getAttribute('data-screen') === 'advertisement') {
    var vid = document.getElementsByTagName('video');
    vid = vid[vid.length - 1];

    if (!vid.muted) {
      console.log('An AD started playing!');
      adIsPlaying = true;
      mute(vid);
    }
  } else {
    if (adIsPlaying) {
      console.log('An AD just stopped');
      adIsPlaying = false;
      unmute(vid);
    }
  }
}, 300);

function mute(video) {
  video.muted = true;
}

function unmute(video) {
  video.muted = false;
}
