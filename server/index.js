const express = require("express");
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const app = express();

/*
 *  Entry point of the server code
 */

// Start Database
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

// Some ExpressJS stuff...
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log("Yo. It works.");
});

// Define routes
const userRoutes = require("./api/user/route/user");
const recipeRoutes = require("./api/recipe/route/recipe");
app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
