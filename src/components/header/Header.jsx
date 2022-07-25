import React from 'react'
import {
  Button,
  FormContainer,
  MainHeader,
  FoodInput,
  HeaderContainer,
  Select,
} from "./HeaderStyles";

const Header = ({setQuery,setVeri,setMeal,mealTypes,getData, query}) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    setQuery("");
    setMeal();
    getData();
    setVeri();
  }
  
  return (
    <HeaderContainer>
    <MainHeader>Food App</MainHeader>
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        
      ></FoodInput>
      <Button type="submit" value="Submit">
        Search
      </Button>
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e)=>setMeal(e.target.value)}
        
      >
        {mealTypes.map((meal, index)=>{
          return (
            <option key={index} value={meal}>
              {meal}
            </option>
          );
        })}
          
        )
      </Select>
    </FormContainer>
  </HeaderContainer>
);
};
  

export default Header