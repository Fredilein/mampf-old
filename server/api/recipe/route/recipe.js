const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipeController");
const auth = require("../../../config/auth");

router.post("/add", auth, recipeController.addRecipe);
router.get("/get", auth, recipeController.getOwnRecipes);

module.exports = router;
