const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.get("/", async (req, res) => {
  try {
    const data = await Profile.find();
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});
module.exports = router;
