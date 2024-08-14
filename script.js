const navContainer = document.getElementById('nav-container');

fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    navContainer.innerHTML = data;
  });

