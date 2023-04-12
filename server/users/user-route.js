const express = require("express");
const { loginUser, registerUser } = require("./user-controller");

const router = express.Router();
router.get("/me", (req, res) => {
  res.send("paisi");
});

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
