import React from "react";
import { useNavigate } from "react-router-dom";
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
import "./card.css"
import { Button, RecipeCards, RecipeHeader, RecipeImage } from './HomeStyles'

const RecipeCard = ({ recipe }) => {
  // console.log(recipe.label);

  let navigate = useNavigate()
  const godetay = () =>{
    navigate("/details", {state:{recipe}})
  }
  return (
    <RecipeCards>

<RecipeHeader>{recipe.label}</RecipeHeader>
<RecipeImage src={recipe.image}/>
<Button onClick={godetay}>Details</Button>


    </RecipeCards>
  );
};

export default RecipeCard;
