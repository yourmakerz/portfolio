// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Check local storage for theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Switch to Light Mode';
  }

  // Add event listener for theme toggle
  themeToggleButton?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleButton.textContent = isDarkMode
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';

    // Save preference in local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});
