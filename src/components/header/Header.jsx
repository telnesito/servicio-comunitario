import './Header.css'

const Header = () => {
  return (
    <header className="c-header">
      <nav className="c-h-link">

        <span className='c-h-principalLink'>
          <p>INICIO</p>
          <p>ORGANIGRAMA</p>
          <p>GALERIA</p>
          <p>CONOCENOS</p>

        </span>

        <span className="c-h-logo">
          <img width={80} height={75} src="/src/assets/images/logoMetropolitano.png"></img>
          <span>
            <p>COLEGIO</p>
            <p>METROPOLITANO</p>
          </span>
        </span>

        <span className="c-h-button">
          <button className='btn-login'>Iniciar sesion</button>
          <button className='btn-contact'>Contactanos</button>
        </span>

      </nav>
    </header>
  )
}

export default Header