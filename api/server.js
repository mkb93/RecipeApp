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
app.get("/recipes_img", (req, res) => {
  const images = recipes.map((recipe) => {
    return {
      ...recipe,
      image:
        recipe["image"] ||
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.refrigeratedfrozenfood.com%2Fext%2Fresources%2FNEW_RD_Website%2FDefaultImages%2Fdefault-pasta.jpg%3F1430942591&f=1&nofb=1&ipt=b84d9c4772951d49976a778d4479e44c266366cec7b1da2633d8e9c32738a8b2&ipo=images",
    };
  });
  res.json(images);
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
