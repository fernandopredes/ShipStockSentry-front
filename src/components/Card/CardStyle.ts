import styled from "styled-components"

export const CardStyle = styled.div `
  background: #9EC496;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 240px;
  max-width:550px;
  display: flex;
  padding: 20px 32px;
  justify-content:space-around;
  align-items:center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);;
  :hover {
  background-color: #b4e6aa;
  transform: scale(1.1);
  }
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom:0.5rem ;
  }
  h3::first-letter {
  text-transform: uppercase;
  }
`
