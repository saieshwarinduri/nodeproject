const monooges = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await monooges.connect(process.env.DATABASE_URL);
    console.log(
      "database established",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
