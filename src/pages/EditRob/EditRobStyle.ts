import styled from "styled-components"


export const Board = styled.div `
background: #9EC496;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
max-width:700px;
margin: 50px auto;

h2{
  font-family: 'Century Gothic Bold';
  padding: 25px 0 31px 0;
  text-align:center;
  font-style: normal;
  font-size: 36px;
  line-height: 44px;
  color: #0E0E0E;
}
.content{
  display: flex;
  align-items:center;
  padding: 0 50px 53px 50px;
  justify-content:space-between;
  form{
    margin: 0 auto;
  }
  button{
      background: #2D412E;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      border:none;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 12.8px;
      line-height: 16px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: #FFFFFF;
      max-width:165px;
      padding: 15px 25px;
    }
  .inputs{
    display: flex;
    flex-direction:column;
    align-items:center;
      span{
        margin-bottom:2rem;
        color: red;
        }
      label{
        display: flex;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #0E0E0E;
        input{
          border-radius: 10px;
          border:none;
          width: 200px;
          padding: 5px 0px 5px 15px;
          margin:0 0.5rem 0 0.5rem;
        }
        input:focus {
        outline: none;
        }
      }
  }
  .btns{
    margin-top:2rem ;
    display: flex;
    justify-content:space-between;
  }
}
`
