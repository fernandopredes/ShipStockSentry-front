import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import api from '../../api';
import { BtnDelete, DetailsPage, Filled, GreenScreen } from './DetailsStyle';
import { BtnGoBack } from '../../components/RegisterForm/RegisterFormStyle';


type DailyRecord = {
  id:number
  date:string
  diesel:number
  drill_water:number
  fresh_water:number
  barite:number
  bentonite:number
  limestone:number
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
    bentonite:0,
    limestone:0,
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

  /* Função de deletar ROB */
  const navigate = useNavigate();
  const deleteDailyRecord = async (id:any) => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.delete(`/daily_record/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      alert('ROB deletado sucesso.')
        navigate('/')
        window.location.reload()
    } catch (error) {
      console.error(error);

    }
  };

  /* Valores máximos de cada tanque */
  const maxDiesel = 2000
  const maxFreshWater = 1000
  const maxDrillWater = 1500
  const maxBarite = 3600
  const maxBentonite = 3600
  const maxLimestone = 3600

  /* Valores para cálculo de porcentagem */
  const dieselRatio = record.diesel / maxDiesel;
  const dieselFilledHeight = `${dieselRatio * 100}%`

  const freshWaterRatio = record.fresh_water / maxFreshWater
  const freshWaterFilledHeight = `${freshWaterRatio * 100}%`

  const drillWaterRatio = record.drill_water / maxDrillWater
  const drillWaterFilledHeight = `${drillWaterRatio * 100}%`

  const bariteRatio = record.barite / maxBarite;
  const bariteFilledHeight = `${bariteRatio * 100}%`

  const bentoniteRatio = record.bentonite / maxBentonite;
  const bentoniteFilledHeight = `${bentoniteRatio * 100}%`

  const limestoneRatio = record.limestone / maxLimestone;
  const limestoneFilledHeight = `${limestoneRatio * 100}%`

  return (
    <DetailsPage>
      <GreenScreen>
        <h1>ROB - {record.date}</h1>
        <ul className='tanks'>
          <li>
            <span>Capacidade Máx.</span>
            <span id='diesel'>{maxDiesel} (m³)</span>
            <div className="square">
              <Filled filledHeight={dieselFilledHeight} productType={'#230808'}/>
            </div>
            <span>Diesel {record.diesel} (m³)</span>
          </li>
          <li>
            <span>Capacidade Máx.</span>
            <span id='fw'>{maxFreshWater} (m³)</span>
            <div className="square">
              <Filled filledHeight={freshWaterFilledHeight} productType={'#0085FF'}/>
            </div>
            <span>Fresh Water {record.fresh_water} (m³)</span>
          </li>
          <li>
            <span>Capacidade Máx.</span>
            <span id='fw'>{maxDrillWater} (m³)</span>
            <div className="square">
              <Filled filledHeight={drillWaterFilledHeight} productType={'#0085FF'}/>
            </div>
            <span>Drill Water {record.drill_water} (m³)</span>
          </li>
          <li>
            <span>Capacidade Máx.</span>
            <span id='ben'>{maxBarite} (ft³)</span>
            <div className="square">
              <Filled filledHeight={bariteFilledHeight} productType={'#6E727D'}/>
            </div>
            <span>Baritina {record.barite} (ft³)</span>
          </li>
          <li>
            <span>Capacidade Máx.</span>
            <span id='ben'>{maxBentonite} (ft³)</span>
            <div className="square">
              <Filled filledHeight={bentoniteFilledHeight} productType={'#6E727D'} />
            </div>
            <span>Bentonita {record.bentonite} (ft³)</span>
          </li>
          <li>
            <span>Capacidade Máx.</span>
            <span id='lime'>{maxLimestone} (ft³)</span>
            <div className="square">
              <Filled filledHeight={limestoneFilledHeight} productType={'#6E727D'}/>
            </div>
            <span>Calcário: {record.limestone} (ft³)</span>
          </li>
        </ul>
        <ul className='buttons'>
          <BtnGoBack to={'/'}>voltar</BtnGoBack>
          <BtnGoBack to={'/'}>editar</BtnGoBack>
          <BtnDelete onClick={() => {deleteDailyRecord(id)}}>deletar</BtnDelete>
        </ul>
      </GreenScreen>
    </DetailsPage>
  )
}

export default Details
