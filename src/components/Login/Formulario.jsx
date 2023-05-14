import { useNavigate } from "react-router"
import { IgButton } from "../foother/IgButton"
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import './Formulario.css'
import { login } from "./auth"
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from "../../hooks/ContextLoginProvider"
const Formulario = () => {
  const navigate = useNavigate()
  const { uid, setUid } = useContext(LoginContext)
  const initialCredentials = {
    email: '',
    password: ''
  }
  const [credentials, setCredentials] = useState(initialCredentials)


  const handleLogin = async (e) => {

    e.preventDefault()


    try {
      const response = await login(credentials.email, credentials.password)

      if (response.uid) {
        setUid(true)
        navigate('/administracion/main/noticias')

      }

    } catch (error) {
      console.log(error)
    }

  }
  const handleGetText = (name, value) => {
    setCredentials({ ...credentials, [name]: value })
  }
  return (
    <div className="c-formulario-principal">

      <div className="c-logo-colegio">
        <img width={'100px'} height={'95px'} src="/src/assets/images/logoMetropolitano.png"></img>
        <p className="logo-titulo">GESTION ADMINISTRATIVA</p>
      </div>

      <form onSubmit={handleLogin} className="c-form-login">
        <div className="c-input">
          <AiOutlineUser className="icon-login" />
          <input required placeholder="Ingrese email" onChange={({ target }) => handleGetText('email', target.value)} type="email"></input>
        </div>
        <div className="c-input">
          <AiOutlineLock className="icon-login" />
          <input required placeholder="Ingrese contraseña" onChange={({ target }) => handleGetText('password', target.value)} type="password"></input>
        </div>

        <div className="c-btn-login">
          <button className="ingresar-btn" type="submit" >Ingresar</button>
          <button className="volver-btn" onClick={() => navigate('/')}>Volver</button>
        </div>
      </form>

      <p className="txt-abajo">Modificar contraseña</p>

      <IgButton />


    </div>
  )
}

export default Formulario