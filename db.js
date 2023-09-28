require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_ACCESS, {
      dbName: process.env.DB_NAME,
    });

    const { name, host } = db.connection;
    console.log(`Database connected to ${name}, host ${host}`);
  } catch (error) {
    console.log("There is an error.", error);
  }
};
module.exports = connect;
