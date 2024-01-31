const express = require("express");
const recipes = require("./data/recipes.json");
const ingredients = require("./data/ingredients.json");
const app = express();

app.get("/", (req, res) => {
  res.send("words");
});
app.get("/recipes", (req, res) => {
  res.json(recipes);
});
app.get("/recipes/:id", (req, res) => {
  const id = Number(req.params.id);
  const recipe = recipes.find((item) => {
    return item.id === id;
  });
  if (!recipe) return res.status(404).send("recipe not found");
  const recipeIngredients = ingredients.find((item) => {
    return item.recipe_id === id;
  });

  res.json({ ...recipe, ingredients: recipeIngredients.ingredients });
});

app.listen(5000, console.log("listening"));
