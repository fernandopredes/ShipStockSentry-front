import jwt_decode from "jwt-decode";
import api from "../../api";
import { useEffect, useState } from "react";
import { Menu } from "./DashBoardStyle";
import miniatura from "../../assets/miniatura.png";
import minilogo from "../../assets/minilogo.png"
import { useNavigate } from "react-router-dom";

type User = {
  name:String
  ship_name:String
}

const DashBoard = (props: User) => {

  /* Pegando dados do usuário da storage */
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('user_id')
  const [user, setUser] = useState<User>({ name: "", ship_name: "" });

  /* Seletores da parte direita do menu principal */
  const [action, setAction] = useState<number>(2)

  useEffect(() => {
    /* Mostrar todos os ROBs do usuário */
    api.get(`/user/${id}/daily_records`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

     /* Mostrar os dados do usuário */
    api.get(`/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setUser(response.data);
      console.log(user)
    })
    .catch(error => {
      console.error(error);
    });

  }, [])

  const navigate = useNavigate();
  const deslogar = () => {
    localStorage.setItem('token', ``)
    localStorage.setItem('user_id', ``)
    window.location.reload();
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <>
      <Menu>
        <div className="options">
          <div className="left-side">
            <img src={minilogo} alt="imagem de navio de perfuração" />
            <div className="profile-data">
              <span>Bem-vindo: {user.name}</span>
              <span>Unidade Marítima: {user.ship_name}</span>
            </div>
          </div>
          <div className="right-side">
            <button onClick={() => {setAction(1)}}>Dashboard</button>
            <button onClick={() => {setAction(2)}}>Novo ROB</button>
            <button onClick={() => {deslogar()}}>Logout</button>
          </div>
        </div>
      </Menu>

      {action === 1 ?
       <>
        <h1>teste</h1>
       </>
       : null}

      {action === 2 ?
       <>
        <h1>teste2</h1>
       </>
       : null}
    </>
  )
}

export default DashBoard
