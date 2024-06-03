document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const conpassword = document.getElementById('confirm_password').value;
    if(password==conpassword){

          window.location.href = 'login.html';
        }
    else{
      alert("Passwords arent matching")
    }
      });
