import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../api'
import axios from 'axios'
import { BtnGoBack, FormCard } from "./RegisterFormStyle";

type Inputs = {
  name: string;
  email: string;
  password: string;
  shipName: string;
}

const schema = yup.object({
  name: yup.string().required('O nome de usuário é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().min(8, 'A senha deve ter no mínimo 8 dígitos').required('Preencha uma senha'),
  shipName: yup.string().required('O nome do navio é obrigatório')
}).required();

function RegisterForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const registerUser = async () => {
      try {
        const res = await api.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          ship_name: data.shipName
        })

        alert('Usuário cadastrado com sucesso')
        navigate('/')
        window.location.reload()
      } catch (err) {

        alert('houve um erro')
      }
    }
    registerUser();
};

  return (
    <>
      <FormCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
            <label>
                <input {...register("name", { required: true })} className="register" placeholder="nome de usuário" />
                <span>{errors.name?.message}</span>
            </label>
            <label>
                <input {...register("email", { required: true })} className="register" placeholder="e-mail" />
                <span>{errors.email?.message}</span>
            </label>
            <label>
                <input type='password' {...register("password", { required: true })} className="register" placeholder="password" />
                <span>{errors.password?.message}</span>
            </label>
            <label>
                <input {...register("shipName", { required: true })} placeholder="nome do navio " />
                <span>{errors.shipName?.message}</span>
            </label>
            <div className="buttons">
              <BtnGoBack to={'/'}>voltar</BtnGoBack>
              <button> Enviar </button>
            </div>
        </form>
      </FormCard>
    </>
  )
}

export default RegisterForm
