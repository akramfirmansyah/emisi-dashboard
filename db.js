require("dotenv").config();
const mongoose = require("mongoose");

const db = mongoose.connect(process.env.DB_ACCESS).then(() => {
  console.log("database connected");
});

module.exports = db;
