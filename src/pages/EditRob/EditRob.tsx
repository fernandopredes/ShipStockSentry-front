import { Board } from "./EditRobStyle"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import api from "../../api"

import ship from "../../assets/ship.png"


type Inputs = {
  diesel: number
  drillWater: number
  freshWater: number
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

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  /* Hook para recarregar depois de fazer o post do ROB */
  const navigate = useNavigate();

  /* Função para realizar o POST do ROB */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
        /* Pegar o token do local storage */
        const token = localStorage.getItem('token')
        /* Pegar o id do local storage e transformar em número*/
        const userId = Number(localStorage.getItem('user_id'))
        /* Definir a variável data com os itens que precisam ser passados */
        const dataWithUserId = {
          diesel: data.diesel,
          drill_water: data.drillWater,
          fresh_water: data.freshWater,
          bentonite: data.bentonite,
          barite: data.barite,
          limestone: data.limestone,
          user_id: userId
        }
        /* Enviar data(com o user_id) e o token no header */
        const res = await api.post('/daily_record', dataWithUserId, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        alert('ROB atualizado com sucesso');

        navigate('/')
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
                    <input {...register("diesel", { required: true })}placeholder="Valor de Diesel"  />
                    (m³)
                </label>
                    <span>{errors.diesel?.message}</span>
                <label>
                    Drill Water
                    <input {...register("drillWater", { required: true })}placeholder="Valor de DrillWater"  />
                    (m³)
                </label>
                    <span>{errors.drillWater?.message}</span>
                <label>
                    Fresh Water
                    <input {...register("freshWater", { required: true })}placeholder="Valor de FreshWater"  />
                    (m³)
                </label>
                    <span>{errors.freshWater?.message}</span>
                <label>
                    Bentonita
                    <input {...register("bentonite", { required: true })}placeholder="Valor de Bentonita"  />
                    (ft³)
                </label>
                    <span>{errors.bentonite?.message}</span>
                <label>
                    Baritina
                    <input {...register("barite", { required: true })}placeholder="Valor de Baritina"  />
                    (ft³)
                </label>
                    <span>{errors.barite?.message}</span>
                <label>
                    Calcário
                    <input {...register("limestone", { required: true })}placeholder="Insira seu limestone"  />
                    (ft³)
                </label>
                    <span>{errors.limestone?.message}</span>
                <button> Atualizar </button>
              </div>
            </form>
          </div>
    </Board>
  )
}

export default EditRob
