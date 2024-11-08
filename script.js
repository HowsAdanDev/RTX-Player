// Function to generate multiple video players
function generatePlayers() {
  const videoContainer = document.getElementById("videoContainer");
  const videoLink = document.getElementById("videoLink").value;
  const playerCountInput = document.getElementById("playerCount").value;

  // Clear previous video players
  videoContainer.innerHTML = '';

  if (!videoLink) {
    alert("Please enter a valid video link.");
    return;
  }

  let playerCount = parseInt(playerCountInput);
  
  // Validate player count input
  if (isNaN(playerCount) || playerCount < 1 || playerCount > 1000) {
    alert("Please enter a valid number of players (between 1 and 1000).");
    return;
  }

  // Generate video players
  for (let i = 0; i < playerCount; i++) {
    const videoElement = document.createElement("video");
    videoElement.src = videoLink;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoContainer.appendChild(videoElement);
  }
}