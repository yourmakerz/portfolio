// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const target = document.querySelector(this.getAttribute('href')); // Get the target section
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target section
    }
  });
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleCheckbox = document.getElementById('theme-toggle'); // Toggle switch element
  const body = document.body;

  // Check local storage for theme preference and apply it
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode'); // Apply dark mode if stored in local storage
    themeToggleCheckbox.checked = true; // Set the toggle to "on" for dark mode
  }

  // Add event listener to the toggle switch
  themeToggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode'); // Toggle the dark mode class on <body>

    // Save the theme preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});
