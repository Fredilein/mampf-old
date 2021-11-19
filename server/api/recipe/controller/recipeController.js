const Recipe = require("../model/Recipe");

exports.addRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      user: req.userData._id,
      title: req.body.title,
      link: req.body.link,
      tags: req.body.tags,
      public: req.body.public,
    });
    let data = await recipe.save();
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

exports.getOwnRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.userData._id });
    res.status(201).json({ recipes });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
