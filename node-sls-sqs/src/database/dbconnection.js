"use strict";
const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    let connectionUrl = process.env.DB_URI;
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
    });
    console.log("connectionUrl", connectionUrl);
  } catch (error) {
    console.log("db connection failed", {
      error: error.message,
    });
  }
};
module.exports = DbConnection;
