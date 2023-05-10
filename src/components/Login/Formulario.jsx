import { useNavigate } from "react-router"
import { IgButton } from "../foother/IgButton"
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'

import './Formulario.css'
const Formulario = () => {
  const navigate = useNavigate()
  return (
    <div className="c-formulario-principal">

      <div className="c-logo-colegio">
        <img width={'100px'} height={'95px'} src="/src/assets/images/logoMetropolitano.png"></img>
        <p className="logo-titulo">GESTION ADMINISTRATIVA</p>
      </div>

      <form className="c-form-login">
        <div className="c-input">
          <AiOutlineUser className="icon-login" />
          <input placeholder="Ingrese usuario" type="text"></input>
        </div>
        <div className="c-input">
          <AiOutlineLock className="icon-login" />
          <input placeholder="Ingrese contraseña" type="password"></input>
        </div>

        <div className="c-btn-login">
          <button className="ingresar-btn" type="button" onClick={() => navigate('/administracion/main/noticias')}>Ingresar</button>
          <button className="volver-btn" onClick={() => navigate('/')}>Volver</button>
        </div>
      </form>

      <p className="txt-abajo">Modificar contraseña</p>

      <IgButton />


    </div>
  )
}

export default Formulario