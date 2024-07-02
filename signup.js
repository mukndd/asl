document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  if (password === confirmPassword) {
      fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      })
      .then(response => {
          if (response.ok) {
              window.location.href = 'login.html';
          } else {
              alert('Error: ' + response.statusText);
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  } else {
      alert("Passwords don't match");
  }
});
