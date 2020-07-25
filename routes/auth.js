const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  try {
    let user = await Profile.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid Email or Password");
    let com = await bcrypt.compare(req.body.password, user.password);
    if (!com) return res.status(400).send("Invalid Email or Password");
    const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey"));
    res.header("x-auth-token", token);
    res.send(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
