import styled from "styled-components"
import { Link } from "react-router-dom"

export const Menu = styled.div `

background: rgba(255, 255, 255, 0.25);
height: 150px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:0 0 25px 25px;
margin-bottom:4rem ;

.options{
  max-width:1600px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin:0 auto;
}

.left-side{
  img{
    margin-right:60px;
  }
  display: flex;
  align-items:center;
  max-width:600px;
  justify-content:space-between;
  .profile-data{
    display: flex;
    flex-direction: column;
    span{
      margin-top:.7rem;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #2D412E;
      text-transform: capitalize;
    }
  }
}

.right-side{
  button{
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 29px;
  color: #2D412E;
  border: none;
  background: none;
  cursor:pointer;
  margin-left:2rem ;
  }
}
`

export const Cards = styled.div `
ul{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}
`
export const NoContent= styled.div `
span{
  margin-top:20vh;
  display: block;
  text-align:center;
  font-size:36px
}
`
