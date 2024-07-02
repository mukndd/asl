// JavaScript to toggle side navigation menu
document.querySelector('.fa-bars').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    nav.classList.toggle('show');
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
  });
function toggleSearch() {
  const searchNavbar = document.querySelector('.search-navbar');
  searchNavbar.classList.toggle('show');
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded', () => {
  const logsContainer = document.getElementById('logs-container');

  for (let i = 1; i <= 10; i++) { // Adjust the number as needed
    const logBox = document.createElement('div');
    logBox.className = 'log-box';
    
    const logHeading = document.createElement('h2');
    logHeading.textContent = `Log ${i}`;
    
    logBox.appendChild(logHeading);
    logsContainer.appendChild(logBox);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const authButtons = document.getElementById('auth-buttons');
  const userGreeting = document.getElementById('user-greeting');
  const greeting = document.getElementById('greeting');

  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
      authButtons.classList.add('d-none');
      userGreeting.classList.remove('d-none');
      greeting.textContent = `Hey, ${loggedInUser}`;
  } else {
      authButtons.classList.remove('d-none');
      userGreeting.classList.add('d-none');
  }
});
