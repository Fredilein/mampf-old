const express = require("express");
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const app = express();

//configure database and mongoose
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log("Hello MEVN Soldier");
});

const userRoutes = require("./api/user/route/user");
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
