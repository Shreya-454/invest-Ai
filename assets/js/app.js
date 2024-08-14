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
const videoElements = document.querySelectorAll('video');    
let currentPlayingVideo = null;  

function playPauseVideo(videoElement, playIcon) {
    // If another video is currently playing, pause and reset it
    if (currentPlayingVideo && currentPlayingVideo !== videoElement) {
        currentPlayingVideo.pause();
        currentPlayingVideo.currentTime = 0;
        currentPlayingVideo.removeAttribute('controls');
        currentPlayingVideo.parentElement.querySelector('.pause-icon').style.display = 'block';
    }

    // Play the current video or pause it if it's already playing
    if (videoElement.paused) {
        videoElement.play(); 
        videoElement.setAttribute('controls', 'true');  
        playIcon.style.display = 'none';  
        currentPlayingVideo = videoElement;  
    } else {
        videoElement.pause(); 
        videoElement.removeAttribute('controls');  
        playIcon.style.display = 'block'; 
        currentPlayingVideo = null;  
    }
}

// Add event listener to each play icon
playIcons.forEach(playIcon => {
    playIcon.addEventListener('click', function (e) {
        e.stopPropagation(); 
        const videoId = this.getAttribute('data-video-id');  
        const videoElement = document.getElementById(videoId);
        playPauseVideo(videoElement, this);  
    });
});

// Add event listener to each video element
videoElements.forEach(videoElement => {
    videoElement.addEventListener('click', function () {
        const playIcon = this.parentElement.querySelector('.pause-icon');  
        playPauseVideo(this, playIcon);  
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
});
// The background video should continue playing independently
const backgroundVideo = document.getElementById("backgroundVideo");
backgroundVideo.play();