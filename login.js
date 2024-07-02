document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();

          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          fetch('users.json')
              .then(response => response.json())
              .then(users => {
                  const user = users.find(user => user.username === username && user.password === password);

                  if (user) {
                      sessionStorage.setItem('loggedInUser', user.username);
                      window.location.href = 'index.html';
                  } else {
                      alert('Invalid username or password');
                  }
              })
              .catch(error => {
                  console.error('Error fetching users:', error);
              });
      });
  } else {
      console.error('Login form not found');
  }
});
