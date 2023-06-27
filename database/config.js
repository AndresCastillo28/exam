const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB online..");
  } catch (error) {
    console.log(error);
    throw new Error("Database conecction failed");
  }
};

module.exports = {
  dbConnection,
};
