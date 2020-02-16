const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const balanceSchema = new Schema({
  summary: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Balance = mongoose.model("Balance", balanceSchema);

module.exports = Balance;