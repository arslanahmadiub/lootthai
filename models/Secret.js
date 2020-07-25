const mongoose = require("mongoose");
const secretSchema = new mongoose.Schema({
  sunSecret: {
    type: String,
    required: true,
  },
  moonSecret: {
    type: String,
    required: true,
  },
  starSecret: {
    type: String,
    required: true,
  },
  darkSecret: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = Secret = mongoose.model("secret", secretSchema, "Secret");
