import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../api'
import axios from 'axios'


type Inputs = {
  email: string;
  password: string;
}

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
