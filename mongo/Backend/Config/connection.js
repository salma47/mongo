const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected...");
  } catch (error) {
    console.log("data base not connected !!!!");
  }
};

module.exports = connectDB;
