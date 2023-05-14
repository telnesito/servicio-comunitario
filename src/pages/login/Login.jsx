import Formulario from "../../components/Login/Formulario"
import InfoLogin from "../../components/Login/InfoLogin"
import './login.css'
import { ContextLoginProvider } from "../../hooks/ContextLoginProvider"


const Login = () => {
  return (

    <div className="c-login-principal">
      <ContextLoginProvider>
        <Formulario />
        <InfoLogin />

      </ContextLoginProvider>
    </div>
  )
}

export default Login