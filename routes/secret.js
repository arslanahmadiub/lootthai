const express = require("express");
// const auth_middleware = require("../middleware/auth");
const router = express.Router();

const Secret = require("../models/Secret");

router.post("/", async (req, res) => {
  const {
    sunSecret,
    moonSecret,
    starSecret,
    darkSecret,
    secretDate,
  } = req.body;
  try {
    let secret = new Secret({
      sunSecret: sunSecret,
      moonSecret: moonSecret,
      starSecret: starSecret,
      darkSecret: darkSecret,
      date: secretDate,
    });

    await secret.save();
    res.send(secret);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
