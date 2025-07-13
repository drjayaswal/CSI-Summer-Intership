const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = (req, res) => {
  const { email, password } = req.body;
  const existing = users.find((u) => u.email === email);
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashedPassword = bcrypt.hashSync(password, 12);
  users.push({ id: Date.now(), email, password: hashedPassword });
  fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

  res.status(201).json({ message: "User registered successfully" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user.id);
  res.json({ token });
};
