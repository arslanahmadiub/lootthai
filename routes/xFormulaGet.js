const express = require("express");
const router = express.Router();
const XFormula = require("../models/XFormula");

router.get(
  "/",

  async (req, res) => {
    try {
      const data = await XFormula.find();
      res.send(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
