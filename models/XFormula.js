const mongoose = require("mongoose");
const xformulaSchema = new mongoose.Schema({
  firstDigit: {
    type: String,
    required: true,
  },
  secondDigit: {
    type: String,
    required: true,
  },
  thirdDigit: {
    type: String,
    required: true,
  },
  fourthDigit: {
    type: String,
    required: true,
  },
  fifthDigit: {
    type: String,
    required: true,
  },
});
module.exports = XFormula = mongoose.model(
  "xformula",
  xformulaSchema,
  "X-Fromula"
);
