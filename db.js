require("dotenv").config();
const mongoose = require("mongoose");

const db = mongoose.connect(process.env.DB_ACCESS, {
  dbName: process.env.DB_NAME
}).then(() => {
  console.log("database connected");
});

module.exports = db;
