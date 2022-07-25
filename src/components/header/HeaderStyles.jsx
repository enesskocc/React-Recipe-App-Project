import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu */
  font-family: sans-serif;
  background: #82a7c9;
  /* height: 100vh; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  font-family: Montserrat, sans-serif;
  gap: 1rem;


  background: #00adb5;
`;

export const MainHeader = styled.h2`
  /* food app başlık */
  font-weight: bolder;

`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu */
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #e1e6fa;
  border-radius: 1rem;
  min-height: 4rem;
  background-color: #033f5d;
  
 
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input */
  text-indent: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: all 0.5s;
  font-weight: bold;
  ::placeholder {
    font-weight: bold;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    border: 2px solid yellow;
    outline: none;
  }
`;

export const Button = styled.button`
  /* search butonu */
  padding: 1rem;
  border-radius: 1rem;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  :hover {
    opacity: 0.9;
    color: white;
    background-color: #011526;}
 
`;

export const Select = styled.select`
  /* breakfast yazan select */
  font-family: Montserrat, sans-serif;
  padding: 0 10px;
  font-size: 1.1rem;
  transition: all 0.7s ease-in-out;
  border-radius: 1rem;
  font-weight: 600;


`;
