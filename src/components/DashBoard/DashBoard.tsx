import jwt_decode from "jwt-decode";
import api from "../../api";
import { useEffect, useState } from "react";
import { Cards, Menu, NoContent } from "./DashBoardStyle";
import miniatura from "../../assets/miniatura.png";
import minilogo from "../../assets/minilogo.png"
import { Link, useNavigate } from "react-router-dom";
import NewRob from "../NewRob/NewRob";
import Card from "../Card/Card";

type User = {
  name:string
  ship_name:string
}

type DailyRecord = {
  id:number
  date:string
  diesel:number
  drill_water:number
  fresh_water:number
  barite:number
  bentonite:number
  user_id:number
}

const DashBoard = () => {

  /* Pegando dados do usuário da storage */
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('user_id')
  const [user, setUser] = useState<User>({ name: "", ship_name: "" })
  const [dailyRecord, setDailyRecord] = useState<DailyRecord[]>([])

  /* Seletores da parte direita do menu principal */
  const [action, setAction] = useState<number>(1)

  /* UseEffect rodando uma só vez(quando a página é carregada) */
  useEffect(() => {
    /* Mostrar todos os ROBs do usuário */
    api.get(`/user/${id}/daily_records`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setDailyRecord(res.data);
      console.log(res.data)
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
    .then(res=> {
      setUser(res.data);
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
            <button onClick={() => {setAction(1)}} className="btn">Dashboard</button>
            <button onClick={() => {setAction(2)}} className="btn">Novo ROB</button>
            <button onClick={() => {deslogar()}} className="btn">Logout</button>
          </div>
        </div>
      </Menu>
      {/* Lógica para mostrar os cards e caso não tenha, aparecer mensagem que não existem cards */}
      {action === 1 ?
        dailyRecord.length > 0 ?
        (
          <Cards className="container">
            <ul>
              {/* Invertendo o array de ROB's para aparecer do último até o primeiro e usando o .map */}
              {dailyRecord.reverse().map((record, index)=>(
                <li>
                  <Link to={`/${record.id}`}>
                    <Card
                      key={index}
                      id={record.id}
                      ship={user.ship_name}
                      date={record.date}
                    />
                  </Link >
                </li>
              ))}
            </ul>
          </Cards>
        )
        :
        (
          <NoContent>
            <span>Ainda não existem ROB's no sistema</span>
          </NoContent>
        )

       : null}

      {action === 2 ?
       <div className="container">
        <NewRob/>
       </div>
       : null}
    </>
  )
}

export default DashBoard
