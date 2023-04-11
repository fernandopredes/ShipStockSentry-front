import React from 'react'
import { CardStyle } from './CardStyle'
import miniatura from '../../assets/miniatura.png'
import moment from 'moment';

type Props = {
  ship:string
  date:string
  id:number
}

function Card({date, ship, id}: Props) {

  //modificando a data para o formato dd/mm/aaaa
  const formattedDate = moment.utc(date).format('DD/MM/YYYY');

  return (
    <CardStyle>
      <img src={miniatura} alt="imagem de um navio verde" />
      <div>
        <h3>ROB de número {id}</h3>
        <h3>{ship}</h3>
        <h3>{formattedDate}</h3>
      </div>
    </CardStyle>
  )
}

export default Card
