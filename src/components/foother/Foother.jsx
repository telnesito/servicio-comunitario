import './Foother.css'
import { IgButton } from './IgButton'

const Foother = () => {
  return (
    <footer id='foother' className='c-footer-principal'>

      <div className='f-colegio'>
        <h3>Metropolitano</h3>
        <img height={'140px'} src='/img/logoMetropolitano.png'></img>
        <p>© 2023 Colegio Metropolitano Puerto Ordaz</p>
      </div>
      <div className='f-contacto'>
        <h3>Contacto</h3>

        <p>Paseo Rotario- Vía Venezuela</p>
        <p>Campo B de Ferrominera</p>
        <p>Tlf: 02869232904</p>
        <p>Puerto Ordaz - Edo. Bolívar</p>
        <p>colegiometropolitano.online</p>
      </div>
      <div className='f-redes'>
        <h3>Redes</h3>
        <p>Siguenos en nuestras redes sociales, encuentranos como Colegio Metropolitano </p>
        <IgButton />
      </div>
      <div className='f-importante'>
        <h3>Importante</h3>
        <p>Comunicaciones</p>
        <p>Proyecto Pedagogico</p>
        <p>Historia</p>
        <p>Instalaciones</p>
        <p>Personal</p>
      </div>

    </footer>
  )
}

export default Foother