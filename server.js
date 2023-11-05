const express = require("express");
require("dotenv").config();
const url = process.env.DATABASE_URL;

const port = process.env.PORT;
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();

connectDb();
app.use(express.json());
app.use("/", require("./routs/routs"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("server has started on 3000");
});
