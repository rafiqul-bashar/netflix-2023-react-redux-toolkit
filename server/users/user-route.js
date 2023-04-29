const express = require("express");
const { loginUser, registerUser } = require("./user-controller");
const { addToPlaylist, getPlaylist } = require("./user-playlist");

const router = express.Router();
router.get("/me", (req, res) => {
  res.send("paisi");
});

router.get("/playlist/:id", getPlaylist);
router.post("/playlist/:id", addToPlaylist);
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
