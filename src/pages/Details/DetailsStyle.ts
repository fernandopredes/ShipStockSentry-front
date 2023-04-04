import styled from "styled-components"

export const DetailsPage = styled.div `
ul{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
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

      transform: scaleY(-1);
      .filled{
        position: absolute;
        top: 0;
        left: 0;
        height: 50%;
        width: 100%;
        background-color: white;
      }
    }
  }
}
`
