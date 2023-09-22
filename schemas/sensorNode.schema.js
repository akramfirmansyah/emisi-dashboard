const { Schema, Types } = require("mongoose");
const id = Schema.ObjectId;

module.exports = {
  id,
  airTemperature: Number,
  co2: Number,
  humadity: Number,
  noise: Number,
};