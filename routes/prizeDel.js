const express = require("express");
const router = express.Router();
const Prize = require("../models/Prize");

router.post("/", async (req, res) => {
  const { id } = req.body;
  try {
    await Prize.findOneAndDelete({ _id: id }, function (err) {
      if (err) console.log(err);
    });
    res.send(id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error...");
  }
});

module.exports = router;
