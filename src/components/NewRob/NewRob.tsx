import { Board } from "./NewRobStyle"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import api from "../../api"


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
  diesel: yup.number().round("round").required('Preencha um valor de duas casas decimais.'),
  drillWater: yup.number().round("round").required('Preencha um valor de duas casas decimais.'),
  freshWater: yup.number().round("round").required('Preencha um valor de duas casas decimais.'),
  bentonite: yup.number().round("round").required('Preencha um valor de duas casas decimais.'),
  barite: yup.number().round("round").required('Preencha um valor de duas casas decimais.'),
  limestone: yup.number().round("round").required('Preencha um valor de duas casas decimais.')
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
        /* Enviar data e o token no header */
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
      <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input {...register("diesel", { required: true })}placeholder="Insira seu diesel"  />
                <span>{errors.diesel?.message}</span>
            </label>
            <label>
                <input {...register("drillWater", { required: true })}placeholder="Insira seu drillWater"  />
                <span>{errors.drillWater?.message}</span>
            </label>
            <label>
                <input {...register("freshWater", { required: true })}placeholder="Insira seu freshWater"  />
                <span>{errors.freshWater?.message}</span>
            </label>
            <label>
                <input {...register("bentonite", { required: true })}placeholder="Insira seu bentonite"  />
                <span>{errors.bentonite?.message}</span>
            </label>
            <label>
                <input {...register("barite", { required: true })}placeholder="Insira seu barite"  />
                <span>{errors.barite?.message}</span>
            </label>
            <label>
                <input {...register("limestone", { required: true })}placeholder="Insira seu limestone"  />
                <span>{errors.limestone?.message}</span>
            </label>
            <button> Enviar </button>
          </form>
    </Board>
  )
}

export default NewRob
