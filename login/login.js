document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Login form submitted!');
});
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDkWlhmyzPyXFh440FTcgLUicsVHln_B0",
  authDomain: "elite-epoch-421017.firebaseapp.com",
  projectId: "elite-epoch-421017",
  storageBucket: "elite-epoch-421017.appspot.com",
  messagingSenderId: "160983313241",
  appId: "1:160983313241:web:46cb08eb93cb25e62fba48",
  measurementId: "G-8JH22DCQV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        window.location.href = url('home.html'); // Redirect to home page
      })
      .catch((error) => {
        const errorMessage = error.message;
        document.getElementById('errorMessage').textContent = 'Login/password is incorrect';
      });
  });
  