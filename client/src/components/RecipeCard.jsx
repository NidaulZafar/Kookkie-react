import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./recipeCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ recipe }) => {
  const path = `/recipes/${recipe.id}`;
  return (
    <NavLink to={path}>
      <div className="recipe-card-outer">
        <div className="recipe-card-image">
          <img src={recipe.image} alt="" />
        </div>
        <div className="recipe-card-time">
          <FontAwesomeIcon icon={faClock} />
          <span className="">{recipe.timeNeeded}</span>
        </div>
        <div className="recipe-card-title">
          <p>{recipe.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};
