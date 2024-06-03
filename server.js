const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const crypto = require('crypto');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from the root directory

// Endpoint to fetch the Razorpay Key ID
app.get('/get-razorpay-key', (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID });
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});

app.post('/verify-payment', (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === razorpay_signature) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

// Path to the users.json file
const usersFilePath = path.join(__dirname, 'users.json');

// Ensure users.json file exists
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]), 'utf8');
}

// Helper function to log events with timestamps
const logEvent = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      logEvent('Error reading users.json');
      return res.status(500).send('Internal server error.');
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseError) {
      users = [];
    }

    if (!Array.isArray(users)) {
      users = [];
    }

    if (users.some(user => user.username === username)) {
      logEvent(`Sign-up failed: Username "${username}" already exists.`);
      return res.status(400).send('Username already exists.');
    }

    users.push({ username, password });

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), err => {
      if (err) {
        logEvent('Error writing to users.json');
        return res.status(500).send('Internal server error.');
      }
      logEvent(`New user signed up: "${username}"`);
      res.status(200).send('Sign-up successful!');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      logEvent('Error reading users.json');
      return res.status(500).send('Internal server error.');
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseError) {
      users = [];
    }

    if (!Array.isArray(users)) {
      users = [];
    }

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      logEvent(`User logged in: "${username}"`);
      res.status(200).send('Login successful!');
    } else {
      logEvent(`Failed login attempt: Username "${username}"`);
      res.status(400).send('Invalid username or password.');
    }
  });
});

// Single app.listen call
app.listen(port, () => {
  logEvent(`Server running at http://localhost:${port}`);
});
