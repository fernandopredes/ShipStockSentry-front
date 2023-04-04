import { Board } from "./EditRobStyle"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import api from "../../api"

import ship from "../../assets/ship.png"
import { BtnGoBack } from "../../components/RegisterForm/RegisterFormStyle"
import { useEffect, useState } from "react"


type Inputs = {
  diesel: number
  drillWater: number
  freshWater: number
  bentonite: number
  barite: number
  limestone:number
  userId: number
}

type Default = {
  diesel: number
  drill_water: number
  fresh_water: number
  bentonite: number
  barite: number
  limestone:number
  userId: number
}

/* Schema para usar o hook-form e as validações com o yup */
const schema = yup.object({
  diesel: yup.number()
          .max(2000, 'Valor máximo é 2000m³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required(),
  drillWater: yup.number()
          .max(1500, 'Valor máximo é 1500m³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required(),
  freshWater: yup.number()
          .max(1000, 'Valor máximo é 1000m³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required(),
  bentonite: yup.number()
          .max(3600, 'Valor máximo é 3600ft³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required(),
  barite: yup.number()
          .max(3600, 'Valor máximo é 3600ft³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required(),
  limestone: yup.number()
          .max(3600, 'Valor máximo é 3600ft³')
          .typeError('Preencha um valor numérico.')
          .round("round")
          .required()
}).required();

const EditRob = () => {

  const { id } = useParams()
  const [dailyRecords, setDailyRecords] = useState<Default>()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    api.get(`/daily_record/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setDailyRecords(res.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  /* Hook para recarregar depois de fazer o post do ROB */
  const navigate = useNavigate();

  /* Função para realizar o PUT do ROB */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
        /* Pegar o token do local storage */
        const token = localStorage.getItem('token')
        /* Definir a variável data com os itens que precisam ser passados */
        const dataWithUserId = {
          diesel: data.diesel,
          drill_water: data.drillWater,
          fresh_water: data.freshWater,
          bentonite: data.bentonite,
          barite: data.barite,
          limestone: data.limestone,
        }
        /* Enviar data(com o user_id) e o token no header */
        const res = await api.put(`/daily_record/${id}`, dataWithUserId, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        alert('ROB atualizado com sucesso');

        navigate(`/${id}`)
        window.location.reload()

      }
        catch (error) {
          console.log(error)
      }
    }

  return (
    <Board>
      <h2>Novo ROB</h2>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputs">
                <label>
                    Diesel
                    <input {...register("diesel", { required: true })}placeholder="Valor de Diesel" defaultValue={dailyRecords?.diesel} />
                    (m³)
                </label>
                    <span>{errors.diesel?.message}</span>
                <label>
                    Drill Water
                    <input {...register("drillWater", { required: true })}placeholder="Valor de DrillWater"defaultValue={dailyRecords?.drill_water}  />
                    (m³)
                </label>
                    <span>{errors.drillWater?.message}</span>
                <label>
                    Fresh Water
                    <input {...register("freshWater", { required: true })}placeholder="Valor de FreshWater" defaultValue={dailyRecords?.fresh_water} />
                    (m³)
                </label>
                    <span>{errors.freshWater?.message}</span>
                <label>
                    Bentonita
                    <input {...register("bentonite", { required: true })}placeholder="Valor de Bentonita" defaultValue={dailyRecords?.bentonite} />
                    (ft³)
                </label>
                    <span>{errors.bentonite?.message}</span>
                <label>
                    Baritina
                    <input {...register("barite", { required: true })}placeholder="Valor de Baritina" defaultValue={dailyRecords?.barite} />
                    (ft³)
                </label>
                    <span>{errors.barite?.message}</span>
                <label>
                    Calcário
                    <input {...register("limestone", { required: true })}placeholder="Insira seu limestone" defaultValue={dailyRecords?.limestone} />
                    (ft³)
                </label>
                    <span>{errors.limestone?.message}</span>
                <BtnGoBack to={`/${id}`}>voltar</BtnGoBack>
                <button> Atualizar </button>
              </div>
            </form>
          </div>
    </Board>
  )
}

export default EditRob
