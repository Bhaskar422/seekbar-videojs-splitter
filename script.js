document.addEventListener("DOMContentLoaded", function () {
  //   // Find the existing slider element
  player.on("loadeddata", function () {
    var player = videojs("my-video");
    console.log(player.duration());
    const playerProgressElement = document.querySelector(
      ".vjs-play-progress.vjs-slider-bar"
    );

    // if (playerProgressElement) {
    //   playerProgressElement.remove();
    //   // Alternatively, you can use parentNode to remove it
    //   // playerProgressElement.parentNode.removeChild(playerProgressElement);
    // } else {
    //   console.error("Element not found");
    // }

    const sliderElement = document.querySelector(".vjs-progress-holder");
    sliderElement.addChild;

    // Check if the slider element is found
    if (sliderElement) {
      // Array of segment start and end values (percentage of the total duration)
      const segments = [
        { start: 0, end: 30 },
        { start: 31, end: 70 },
        { start: 71, end: 120 },
        { start: 121, end: 180 },
        { start: 181, end: 210 },
      ];

      const parentElement = document.createElement("div");
      parentElement.className = "vjs-slider-segments";

      // Create and append segment elements to the slider
      segments.forEach((segment) => {
        const segmentElement = document.createElement("div");
        segmentElement.className = "vjs-slider-segment";

        // Set the segment's position and width
        const start = segment.start || 0;
        const end = segment.end || 100;
        const videoDuration = player.duration();
        console.log("vd", videoDuration);
        segmentElement.style.left = (start / videoDuration) * 100 + "%";
        segmentElement.style.width = ((end - start) / videoDuration) * 100 + "%";

        // const playerProgress = document.createElement("div");
        // playerProgress.className = "vjs-play-progress vjs-slider-bar";
        // playerProgress.ariaHidden = true;

        // segmentElement.appendChild(playerProgress);

        // Append the segment to the slider
        parentElement.appendChild(segmentElement);
      });
      sliderElement.appendChild(parentElement);
    }
  });
});
