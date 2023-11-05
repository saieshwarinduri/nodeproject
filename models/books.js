const mongoose = require("mongoose");

const booksShcema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please enter the value"],
    },
    age: {
      type: Number,
      require: [true, "please enter the value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", booksShcema);
