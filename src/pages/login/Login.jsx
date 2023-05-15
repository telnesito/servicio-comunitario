import Formulario from "../../components/Login/Formulario"
import InfoLogin from "../../components/Login/InfoLogin"
import './login.css'


const Login = () => {
  return (

    <div className="c-login-principal">
      <Formulario />
      <InfoLogin />

    </div>
  )
}

export default Login