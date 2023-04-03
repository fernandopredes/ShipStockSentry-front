import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../api'
import { LoginCard, MainHomeStyle } from "./LoginStyle";
import logotipo from "../../assets/logotipofinal.png";

type Inputs = {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email('Insira um e-mail válido').required('Preencha o campo de email'),
  password: yup.string().required('Preencha o campo de senha'),
  }).required();

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

const onSubmit: SubmitHandler<Inputs> = async (data) => {
  try {
      const res = await api.post('/login', data);
      alert('Login bem sucedido');

      localStorage.setItem('token', `${String(res.data.access_token)}`)
      localStorage.setItem('user_id', `${String(res.data.user_id)}`)
      console.log(res.data)
      console.log(data)
      navigate('/')
      window.location.reload()

    }
      catch (error) {
      console.log(error);
      alert('email ou senha inválidos')
    }
  }

  return (
    <MainHomeStyle>
      <LoginCard>
        <div className="logo">
          <img src={logotipo} alt="imagem de navio de perfuração" />
        </div>
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input {...register("email", { required: true })}placeholder="Insira seu email"  />
                <span>{errors.email?.message}</span>
            </label>
            <label>
                <input type='password'  {...register("password", { required: true })} placeholder="Insira sua senha" />
                <span>{errors.password?.message}</span>
            </label>
            <button> Entrar </button>
          </form>
          <span>Ainda não tem uma conta? Crie <Link to={`/register/`}><u>aqui</u></Link>.</span>
        </div>
      </LoginCard>
    </MainHomeStyle>
  )
}

export default Login
