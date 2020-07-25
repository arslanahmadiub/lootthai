const express = require("express");
const router = express.Router();
const Prize = require("../models/Prize");

router.get(
  "/",

  async (req, res) => {
    try {
      const data = await Prize.find();
      res.send(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
