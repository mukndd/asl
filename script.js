// JavaScript to toggle side navigation menu
document.querySelector('.fa-bars').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    nav.classList.toggle('show');
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
  });
// JavaScript to toggle navigation menu
document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('nav-open');
  });
    