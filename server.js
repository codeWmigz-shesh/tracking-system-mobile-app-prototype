const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

// Simple JSON file storage
const DATA_FILE = "users.json";

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = { username, email, password };

  // Save to JSON file
  let users = [];
  if (fs.existsSync(DATA_FILE)) {
    users = JSON.parse(fs.readFileSync(DATA_FILE));
  }
  users.push(user);
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));

  res.json({ message: "User saved successfully!" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
