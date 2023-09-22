const { Schema } = require("mongoose");

module.exports = {
  airTemperature: Schema.Types.Number,
  co2: Schema.Types.Number,
  humidity: Schema.Types.Number,
  noise: Schema.Types.Number,
};
