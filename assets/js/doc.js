function setupVideoControls(videoId, playIconId) {
    var video = document.getElementById(videoId);
    var playIcon = document.getElementById(playIconId);
  
    playIcon.addEventListener("click", function () {
      video.play();
      this.style.display = "none";
    });
  
    video.addEventListener("play", function () {
      this.controls = true;
    });
  
    video.addEventListener("pause", function () {
      playIcon.style.display = "block";
    });
  
    video.addEventListener("ended", function () {
      playIcon.style.display = "block";
    });
  }
  
  setupVideoControls("headVideo", "playIcon");
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("Video");
    const playVideo = document.getElementById("playvedio");
    const videoContainer = document.getElementById("videoContainer");

    // Play or pause video when the video container is clicked
    videoContainer.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Hide play button when video is playing
    video.addEventListener("play", function () {
        playVideo.style.display = "none";
    });

    // Show play button when video is paused or ended
    video.addEventListener("pause", function () {
        playVideo.style.display = "block";
    });
    video.addEventListener("ended", function () {
        playVideo.style.display = "block";
    });

    // Pause video when clicking anywhere else on the page
    document.addEventListener("click", function (event) {
        if (!videoContainer.contains(event.target) && !video.paused) {
            video.pause();
        }
    });
});
