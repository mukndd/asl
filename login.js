// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Add your form submission logic here
//     alert('Login form submitted!');
// });
// // Your web app's Firebase configuration
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCDkWlhmyzPyXFh440FTcgLUicsVHln_B0",
//   authDomain: "elite-epoch-421017.firebaseapp.com",
//   projectId: "elite-epoch-421017",
//   storageBucket: "elite-epoch-421017.appspot.com",
//   messagingSenderId: "160983313241",
//   appId: "1:160983313241:web:46cb08eb93cb25e62fba48",
//   measurementId: "G-8JH22DCQV7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in 
//         window.location.href = url('index.html'); // Redirect to home page
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         document.getElementById('errorMessage').textContent = 'Login/password is incorrect';
//       });
//   });
//   const userPfp = document.getElementById('user-pfp');
//   const loginBtn = document.getElementById('login-btn');
  
//   // Firebase Auth instance
//   const auth = firebase.auth();
  
//   // Check auth state
//   auth.onAuthStateChanged(user => {
//     if (user) {
//       // User is signed in
//       const photoURL = user.photoURL;
//       userPfp.src = photoURL;
//       userPfp.style.display = 'block';
//       loginBtn.style.display = 'none';
//     } else {
//       // No user is signed in
//       loginBtn.style.display = 'block';
//       userPfp.style.display = 'none';
//     }
//   });
  
//   // Login function
//   loginBtn.addEventListener('click', () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider).catch(error => {
//       alert("Error during sign-in:", error);
//     });
//   });
  
//   // Redirect to login page if not logged in
//   if (!auth.currentUser) {
//     window.location.href = url('login.html'); // Adjust this path to your login page
//   }
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      if (response.ok) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the main page
      } else {
        response.text().then(text => alert(text));
      }
    })
    .catch(error => alert('Error:', error));
});
  
  