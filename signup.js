document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) {
          alert('Sign-up successful!');
          window.location.href = 'login.html';
        } else {
          response.text().then(text => alert(text));
        }
      })
      .catch(error => console.error('Error:', error));
  });
  