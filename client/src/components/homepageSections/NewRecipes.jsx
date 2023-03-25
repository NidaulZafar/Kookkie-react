import React, { useState } from "react";
import RecipeCard from "../RecipeCard";
import fakeRecipe from "./fakeNewRecipes";
import "./newRecipes.css";

const NewRecipes = () => {
  const [newRecipes, setnewRecipes] = useState(fakeRecipe);

  return (
    <div className="new-recipes-component">
      <h2>New Recipes</h2>
      <div className="new-recipes-list">
        {newRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default NewRecipes;
