import styled from "styled-components"

export const MainHomeStyle = styled.div `
padding-top: 100px;
`

export const LoginCard = styled.div `
  max-width:1092px;
  padding: 60px 28px;
  margin:  0 auto;
  display: flex;
  align-items:center;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 19px;
  justify-content: center;

  label{
    display: flex;
    flex-direction:column;
    span{
      margin-bottom:38px ;
      text-align:center;
      color: red;
    }
  }

  h1{
  font-family: 'Century Gothic Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #2D412E;
  margin-bottom:32px;
  }

  form{
    display: flex;
    flex-direction:column;
    align-items:start;

    input{
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      border: none;
      width: 346px;
      padding: 12px 0 12px 21px;
      font-family: 'Century Gothic';
      font-style: italic;
      font-size: 20px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.53);
    }
    button{
      background: #2D412E;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      padding: 13px 24px;
      max-width:120px;
      border: none;
      font-family: 'Century Gothic';
      font-style: normal;
      font-weight: 700;
      font-size: 12.8px;
      line-height: 16px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 60px;
      cursor: pointer;
    }
    input:focus {
    outline: none;
    }
  }
  .login{
      margin-left:4rem ;
    }
`
