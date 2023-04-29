const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config("env");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
// setup db and start server
const DB = process.env.MONGO_URI;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected To DB successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
//  define routes here
const userRoute = require("./users/user-route");

app.use("/users", userRoute);

app.listen(port, console.log(`Server started on port ${port}`));

app.get("", async (req, res) => {
  res.status(401).send({ message: "Server is up!" });
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
