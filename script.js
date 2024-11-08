// Function to extract YouTube video ID from a given URL
function getYouTubeVideoID(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Function to generate multiple YouTube iframe players
function generatePlayers() {
  const videoContainer = document.getElementById("videoContainer");
  const videoLink = document.getElementById("videoLink").value;
  const playerCountInput = document.getElementById("playerCount").value;

  // Clear previous video players
  videoContainer.innerHTML = '';

  // Extract YouTube video ID
  const videoID = getYouTubeVideoID(videoLink);
  if (!videoID) {
    alert("Please enter a valid YouTube video link.");
    return;
  }

  // Validate player count input
  let playerCount = parseInt(playerCountInput);
  if (isNaN(playerCount) || playerCount < 1 || playerCount > 1000) {
    alert("Please enter a valid number of players (between 1 and 1000).");
    return;
  }

  // Generate YouTube iframe players
  for (let i = 0; i < playerCount; i++) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&controls=1`;
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
  }
}
