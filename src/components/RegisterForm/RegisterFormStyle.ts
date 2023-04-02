import styled from "styled-components"

export const FormCard = styled.div `
  max-width: 595px;
  height: 731px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.35);
  border-radius: 19px;
  margin: 50px auto 0 auto;

  form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 100%;
    h2{
      font-family: 'Century Gothic Bold';
      font-size: 56px;
      line-height: 69px;
      color: #2D412E;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 60px;
    }
    input{
      margin: 0px 0px 50px 0;
      background: #FFFFFF;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      width: 346px;
      border: none;
      padding: 15px 0 15px 15px
    }
    button{
      background: #2D412E;
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
    }
    input:focus {
    outline: none;
    }
  }
`
