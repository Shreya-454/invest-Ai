function playVideo(videoId, button) {
    const video = document.getElementById(videoId);
    video.play();
    button.style.display = 'none';

    video.addEventListener('play', () => {
        video.controls = true;
    });

    video.addEventListener('pause', () => {
        video.controls = false;
        button.style.display = 'block';
    });

    video.addEventListener('ended', () => {
        video.controls = false;
        button.style.display = 'block';
    });
}

document.getElementById('playIcon').addEventListener('click', () => {
    playVideo('diligenceVideo', document.getElementById('playIcon'));
});



// djhfbadjh

const playIcons = document.querySelectorAll('.pause-icon');
let currentPlayingVideo = null;

playIcons.forEach(playIcon => {
    playIcon.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video-id');
        const videoElement = document.getElementById(videoId);

        if (currentPlayingVideo && currentPlayingVideo !== videoElement) {
            currentPlayingVideo.pause();
            currentPlayingVideo.currentTime = 0;
            currentPlayingVideo.removeAttribute('controls'); // Hide controls
            currentPlayingVideo.parentElement.querySelector('.pause-icon').style.display = 'block';
        }

        if (videoElement.paused) {
            videoElement.play();
            videoElement.setAttribute('controls', 'true'); // Show controls
            this.style.display = 'none';
            currentPlayingVideo = videoElement;
        } else {
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.removeAttribute('controls'); // Hide controls
            this.style.display = 'block';
            currentPlayingVideo = null;
        }
    });
});
// Get all video elements except the background video
const videos = document.querySelectorAll("video:not(#backgroundVideo)");

videos.forEach((video) => {
  video.addEventListener("play", function() {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });

  // Play/pause the video when clicking anywhere on the video element
  video.addEventListener("click", function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

// The background video should continue playing independently
const backgroundVideo = document.getElementById("backgroundVideo");
backgroundVideo.play();