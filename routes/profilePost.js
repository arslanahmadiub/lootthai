const express = require("express");

const router = express.Router();
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    let profile = new Profile({
      email,
      password,
    });
    let user = await Profile.findOne({ email: profile.email });
    if (user)
      return res.status(400).send("User of this email is already exist");
    const salt = await bcrypt.genSalt(10);
    profile.password = await bcrypt.hash(profile.password, salt);
    await profile.save();
    // const token = jwt.sign({ _id: profile._id }, config.get("jwtPrivateKey"));
    res.send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
