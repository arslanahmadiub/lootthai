const express = require("express");
const router = express.Router();
const Prize = require("../models/Prize");

router.post(
  "/",

  async (req, res) => {
    const {
      firstPrize,
      secondPrizeLeft,
      secondPrizeDown,
      secondPrizeRight,
      date,
    } = req.body;

    try {
      let prize = new Prize({
        firstPrize,
        secondPrizeLeft,
        secondPrizeDown,
        secondPrizeRight,
        date,
      });

      await prize.save();
      res.send(prize);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
  }
);

module.exports = router;
