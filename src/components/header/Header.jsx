import './Header.css'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="c-header">
      <nav className="c-h-link">

        <span className='c-h-principalLink'>
          <p onClick={() => navigate('/')}>INICIO</p>
          <p onClick={() => navigate('/cuerpo-directivo')}>ORGANIGRAMA</p>
          <p onClick={() => navigate('/galeria')}>GALERIA</p>

        </span>

        <span className="c-h-logo">
          <img width={80} height={75} src="img/logoMetropolitano.png"></img>
          <span>
            <p>COLEGIO</p>
            <p>METROPOLITANO</p>
          </span>
        </span>

        <span className="c-h-button">
          <button onClick={() => navigate('/administracion')} className='btn-login'>Iniciar sesion</button>
        </span>

      </nav>
    </header>
  )
}

export default Header