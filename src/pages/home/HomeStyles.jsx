import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  /* display: flex;
  flex-direction: row; */
  /* height: 20rem; */
  /* width: 50rem; */
  /* justify-content: center; */

`;

export const MainContainer2 = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50rem;
  justify-content: center;
  /* flex-wrap: wrap; */

`;

export const RecipeCard = styled.div`
  /* search den sonra çıkan herbir yiyecek kart */
  
  
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 150px;
  border-radius: 10px;
  
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;

`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  /* margin: 50px; */
  height: 33rem;
  background-color: #00adb5;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
`;




