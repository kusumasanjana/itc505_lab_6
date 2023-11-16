document.addEventListener('DOMContentLoaded', function () {
  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  // Get necessary elements from the DOM
  const targetBox = document.getElementById('target-box');
  const gameStatusBtn = document.getElementById('game-status-btn');
  const guessDisplay = document.getElementById('guess-display');
  const endMsgDisplay = document.getElementById('end-msg-display');
  const gameControls = document.getElementById('game-controls');
  const correctBtn = document.getElementById('correct-btn');
  const tooLowBtn = document.getElementById('too-low-btn');
  const tooHighBtn = document.getElementById('too-high-btn');
  const guessHistory = document.getElementById('guess-history');

  // Event listener for the Start! button
  gameStatusBtn.addEventListener('click', function () {
    const inputValue = targetBox.value;

    // Check if the entered value is a palindrome
    if (isPalindrome(inputValue)) {
      guessDisplay.textContent = 'Your input is a palindrome!';
    } else {
      guessDisplay.textContent = 'Your input is not a palindrome.';
    }

    // Display the game controls
    gameControls.style.display = 'block';
  });

  // Additional event listeners for game control buttons (you can customize these)
  correctBtn.addEventListener('click', function () {
    // Handle the correct button click
  });

  tooLowBtn.addEventListener('click', function () {
    // Handle the too low button click
  });

  tooHighBtn.addEventListener('click', function () {
    // Handle the too high button click
  });
});
