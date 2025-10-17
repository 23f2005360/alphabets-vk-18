// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  const alphabetList = document.getElementById('alphabet-list');
  const showAllBtn = document.getElementById('show-all-btn');
  const hideAllBtn = document.getElementById('hide-all-btn');

  // Generate alphabet items from A to Z
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const li = document.createElement('li');
    li.textContent = letter;
    li.className = 'alphabet-item';
    li.setAttribute('data-letter', letter);
    // Optional: add tooltip or other attributes if needed
    alphabetList.appendChild(li);
  }

  // Show all alphabets
  document.getElementById('show-all-btn').addEventListener('click', function() {
    const items = document.querySelectorAll('.alphabet-item');
    items.forEach(function(item) {
      item.style.display = 'flex';
    });
  });

  // Hide all alphabets
  document.getElementById('hide-all-btn').addEventListener('click', function() {
    const items = document.querySelectorAll('.alphabet-item');
    items.forEach(function(item) {
      item.style.display = 'none';
    });
  });

  // Optional: Add click event to toggle individual letters
  // But not specified in brief, so keeping minimal
});