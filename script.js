// Array to store the selected images
let selectedImages = [];

// Function to select an image
function selectImage(image) {
  // Check if the image is already selected
  if (selectedImages.includes(image)) {
    // Image is already selected, do nothing
    return;
  }

  // Add the image to the selected images array
  selectedImages.push(image);

  // Show or hide the reset button based on the number of selected images
  const resetButton = document.getElementById('reset');
  if (selectedImages.length > 0) {
    resetButton.style.display = 'block';
  } else {
    resetButton.style.display = 'none';
  }

  // Show or hide the verify button based on the number of selected images
  const verifyButton = document.getElementById('verify');
  if (selectedImages.length === 2) {
    verifyButton.style.display = 'block';
  } else {
    verifyButton.style.display = 'none';
  }
}

// Function to reset the selected images
function resetSelection() {
  selectedImages = [];

  // Hide the reset and verify buttons
  const resetButton = document.getElementById('reset');
  const verifyButton = document.getElementById('verify');
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';

  // Clear the result message
  const resultPara = document.getElementById('para');
  resultPara.innerHTML = '';

  // Reset the images (replace with actual image URLs)
  const imageElements = document.querySelectorAll('#image-container img');
  imageElements.forEach((img, index) => {
    img.src = `image${index + 1}.jpg`;
  });
}

// Function to verify the selected images
function verifySelection() {
  // Check if the selected images are identical
  const isIdentical = selectedImages[0].className === selectedImages[1].className;

  // Show the result message
  const resultPara = document.getElementById('para');
  if (isIdentical) {
    resultPara.innerHTML = 'You are a human. Congratulations!';
  } else {
    resultPara.innerHTML = 'We can\'t verify you as a human. You selected the non-identical tiles.';
  }

  // Hide the verify button
  const verifyButton = document.getElementById('verify');
  verifyButton.style.display = 'none';
}

// Function to shuffle the images
function shuffleImages() {
  const imageElements = document.querySelectorAll('#image-container img');

  // Create an array of class names for the images
  const classNames = ['img1', 'img2', 'img3', 'img4', 'img5', 'img1'];

  // Shuffle the array
  for (let i = classNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [classNames[i], classNames[j]] = [classNames[j], classNames[i]];
  }

  // Assign the class names to the images
  imageElements.forEach((img, index) => {
    img.className = classNames[index];
  });
}

// Function to run on page load
function onPageLoad() {
  shuffleImages();
}

// Run the onPageLoad function when the page finishes loading
window.addEventListener('load', onPageLoad);
