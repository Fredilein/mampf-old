const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Include your name"],
  },
  link: {
    type: String,
  },
  tags: {
    type: [String],
  },
  user: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
