import styled from "styled-components"
import { Link } from "react-router-dom"

export const Menu = styled.div `

background: rgba(255, 255, 255, 0.25);
height: 150px;


.options{
  max-width:1400px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin:0 auto;
}

.left-side{
  img{
    margin-left:50px;
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

  }
}
`
