import React, { useState } from "react";
import RecipeCard from "../RecipeCard";
import fakeAllRecipe from "./fakeAllRecipes";
import "./allRecipes.css";

const AllRecipes = () => {
  const [allRecipes, setallRecipes] = useState(fakeAllRecipe);

  return (
    <div>
      <h2>AllRecipes</h2>
      <div className="all-recipes-list">
        {allRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default AllRecipes;
