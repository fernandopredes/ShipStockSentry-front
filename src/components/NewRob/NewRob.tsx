import { Board } from "./NewRobStyle"
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
  diesel: yup.number().typeError('Preencha um valor numérico de até duas casas').round("round").required(),
  drillWater: yup.number().typeError('Preencha um valor numérico de duas casas').round("round").required(),
  freshWater: yup.number().typeError('Preencha um valor numérico de duas casas').round("round").required(),
  bentonite: yup.number().typeError('Preencha um valor numérico de duas casas').round("round").required(),
  barite: yup.number().typeError('Preencha um valor numérico de duas casas').round("round").required(),
  limestone: yup.number().typeError('Preencha um valor numérico de duas casas').round("round").required()
}).required();

const NewRob = () => {

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
        alert('ROB criado com sucesso');

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
                <button> Enviar </button>
              </div>
            </form>
            <img src={ship} alt="imagem de um navio verde" />
          </div>
    </Board>
  )
}

export default NewRob
