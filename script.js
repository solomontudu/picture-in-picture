const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("woops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start PIP
  await videoElement.requestPictureInPicture();
  // activate the button
  button.disabled = false;
});

// onload
selectMediaStream();
