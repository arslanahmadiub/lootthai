const express = require("express");
const router = express.Router();
const Secret = require("../models/Secret");

router.post(
  "/",

  async (req, res) => {
    const { id } = req.body;
    try {
      await Secret.findOneAndDelete({ _id: id }, function (err) {
        if (err) console.log(err);
      });
      res.send(id);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
