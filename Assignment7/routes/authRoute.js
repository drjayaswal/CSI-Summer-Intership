const express = require("express");
const { signup, login } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Protected route
router.get("/protected", protect, (req, res) => {
  res.json({ message: "You have accessed a protected route", user: req.user });
});

module.exports = router;
