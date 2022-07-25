import React from "react";
import { useNavigate } from "react-router-dom";
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
import "./card.css"

const RecipeCard = ({ recipe }) => {
  console.log(recipe.label);
  const navigate= useNavigate()
  return (
    <div className="container">


<div className="card" style={{width:"30rem"}} >
      <h5 className="card-title">{recipe.label}</h5>
      <img src={recipe.image} className="card-img-top" alt={recipe.image} />
      <div className="card-body">
        <p className="card-text">Dish Type : {recipe.dishType[0]}</p>
        <p className="card-text">Meal Type : {recipe.mealType[0]}</p>
        <p className="card-text">Cuisine Type : {recipe.cuisineType[0]}</p>
        <button onClick={()=>navigate(`/Details/${recipe.label}`)} className="btn btn-primary">
          Go Details
        </button>
      </div>
    </div>

    </div>
  );
};

export default RecipeCard;
