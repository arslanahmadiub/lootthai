const express = require("express");
// const auth_middleware = require("../middleware/auth");
const router = express.Router();

const XFormula = require("../models/XFormula");

router.post("/", async (req, res) => {
  const {
    firstDigit,
    secondDigit,
    thirdDigit,
    fourthDigit,
    fifthDigit,
  } = req.body;
  try {
    let xformula = new XFormula({
      firstDigit: firstDigit,
      secondDigit: secondDigit,
      thirdDigit: thirdDigit,
      fourthDigit: fourthDigit,
      fifthDigit: fifthDigit,
    });

    await xformula.save();
    res.send(xformula);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
