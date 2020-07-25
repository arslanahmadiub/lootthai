const mongoose = require("mongoose");
const prizeSchema = new mongoose.Schema({
  firstPrize: {
    type: String,
    required: true,
  },
  secondPrizeLeft: {
    type: String,
    required: true,
  },
  secondPrizeDown: {
    type: String,
    required: true,
  },
  secondPrizeRight: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = prize = mongoose.model("prize", prizeSchema, "Prize");
