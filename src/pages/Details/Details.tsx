import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from '../../api';
import { DetailsPage } from './DetailsStyle';


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

const Details = () => {
  /* pegar o id da url */
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const [record, setRecord] = useState<DailyRecord>({
    id: 0,
    date: "",
    diesel: 0,
    drill_water: 0,
    fresh_water: 0,
    barite: 0,
    bentonite:
    0,
    user_id: 0
  });


  useEffect(() => {


    return () => {
      api.get(`/daily_record/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        setRecord(res.data);
        console.log(res.data)
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [])


  return (
    <DetailsPage>
      <ul>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square"></div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square">
            <div className="filled"></div>
          </div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square"></div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square"></div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square"></div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
        <li>
          <span>Capacidade Máx.</span>
          <input type="text" />
          <div className="square"></div>
          <span>{record.diesel}</span>
          <span>Diesel (m³)</span>
        </li>
      </ul>
    </DetailsPage>
  )
}

export default Details
