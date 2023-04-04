import React from 'react'
import { CardStyle } from './CardStyle'
import miniatura from '../../assets/miniatura.png'

type Props = {
  ship:string
  date:string
  id:number
}

function Card({date, ship, id}: Props) {
  return (
    <CardStyle>
      <img src={miniatura} alt="imagem de um navio verde" />
      <div>
        <h3>ROB de número {id}</h3>
        <h3>{ship}</h3>
        <h3>{date}</h3>
      </div>
    </CardStyle>
  )
}

export default Card
