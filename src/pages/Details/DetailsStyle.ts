import { Link } from "react-router-dom";
import styled from "styled-components"

interface FilledProps {
  filledHeight: string
  productType: string
}

/* Componente para poder passar o filledHeight */
export const Filled = styled.div<FilledProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.filledHeight};
  width: 100%;
  background-color: ${(props) => props.productType};
`;

export const GreenScreen = styled.div `
  background: #9EC496;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  max-width:1170px;
  position: relative;
  padding: 40px 0;
  margin: 10px auto 0 auto;
  h1{
    font-size:40px;
    text-align:center;
    font-family: "Century Gothic Bold";
  }
  .buttons{
    display: flex;
    justify-content:space-around;
  }
`

export const DetailsPage = styled.div `
.tanks{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
  margin-top: 20px;
  margin-bottom: 50px;
  span{
    margin-bottom: 1rem;
  }
  li{
    display: flex;
    flex-direction:column;
    align-items:center;
    span{
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #0E0E0E;
    }
    input{
      border-radius: 10px;
      border:none;
      width: 200px;
      padding: 5px 0px 5px 15px;
      margin:0 0.5rem 0 0.5rem;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
    }
    input:focus {
    outline: none;
    }
    .square{
      position:relative;
      width: 110px;
      height: 147px;
      border: 2px solid #000000;
      margin-bottom:1.2rem ;
      transform: scaleY(-1);
      .filled{
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
`

export const BtnDelete = styled.button`
  background: #E01B1B;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  font-family: 'Century Gothic';
  font-weight: 700;
  font-size: 12.8px;
  line-height: 16px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 15px 45px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  :hover {
  background-color: white;
  color: red;
  }
`
