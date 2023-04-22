import './Conocenos.css'
import { getUniqueId } from 'unique-id-generator-javascript'

const Conocenos = () => {

  const SERVICES =
    [
      {
        id: getUniqueId(),
        image: '/src/assets/images/proyectoPedagogico.png',
        title: 'PROYECTO PEDAGOGICO',
        button: 'Ver mas'
      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/cuerpoDirectivo.png',
        title: 'CUERPO DIRECTIVO',
        button: 'Ver mas'
      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/history.png',
        title: 'HISTORIA',
        button: 'Ver mas'
      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/Instalaciones.png',
        title: 'INSTALACIONES',
        button: 'Ver mas'
      }
    ]


  return (
    <div className='c-conocenos-principal'>
      <span className='c-conocenos-info'>
        <h1>U. E Colegio Metropolitano</h1>
        <p>El Colegio Metropolitano se creó en el mes de Septiembre del año 1988 y actualmente cuenta con  más de 27 promociones de bachilleres, todos ellos ubicados en estudios superiores o ya en el campo de trabajo.</p>
      </span>

      <div className='c-conocenos-services'>
        {SERVICES.map(({ id, title, image, button }) => {
          return (
            <div key={id}>
              <img src={image} />
              <p>{title}</p>
              <button>{button}</button>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Conocenos