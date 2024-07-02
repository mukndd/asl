document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-greeting').textContent = `Hey, ${loggedInUser}`;
    }

    const authButtons = document.getElementById('auth-buttons');
    const userGreeting = document.getElementById('user-greeting');
    const greeting = document.getElementById('greeting');

    if (loggedInUser) {
        authButtons.classList.add('d-none');
        userGreeting.classList.remove('d-none');
        greeting.textContent = `${loggedInUser}`;
    } else {
        authButtons.classList.remove('d-none');
        userGreeting.classList.add('d-none');
    }
});
