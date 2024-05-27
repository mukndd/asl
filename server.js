const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from the root directory

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

app.listen(port, () => {
  logEvent(`Server running at http://localhost:${port}`);
});
