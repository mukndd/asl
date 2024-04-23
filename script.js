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

  