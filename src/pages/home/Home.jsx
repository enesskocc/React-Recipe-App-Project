import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { logDOM } from "@testing-library/react";
import anaresim from "../../img/home.svg";
import { HomeImg, ImgDiv, MainContainer, MainContainer2 } from "./HomeStyles";

const APP_ID = "ca07f724";
const APP_KEY = "db5c1d214b1b90dfdc02158971b3b493";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");
  const [veri, setVeri] = useState();

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    setVeri(data);
  };
  // console.log(veri);

  return (
    <div>
      <div>
        <Header
          setVeri={setVeri}
          query={query}
          mealTypes={mealTypes}
          meal={meal}
          setMeal={setMeal}
          setQuery={setQuery}
          getData={getData}
        />
        {veri ? ( <MainContainer>{
          veri.hits.map((i, index) => (
            
            <RecipeCard recipe={i.recipe} key={index} />
            ))}</MainContainer>
          
        ) : (
          
            <ImgDiv>
              {" "}
              <HomeImg src={anaresim} alt="" />
            </ImgDiv>
          
        )}
      </div>
    </div>
  );
};

export default Home;
