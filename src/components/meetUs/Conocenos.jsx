import './Conocenos.css'
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Conocenos = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const navigate = useNavigate()

  const SERVICES =
    [
      {
        id: getUniqueId(),
        image: '/src/assets/images/proyectoPedagogico.png',
        title: 'PROYECTO PEDAGOGICO',
        button: 'Ver mas',
        to: '/proyecto-pedagogico/'
      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/cuerpoDirectivo.png',
        title: 'CUERPO DIRECTIVO',
        button: 'Ver mas',
        to: '/cuerpo-directivo/'

      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/history.png',
        title: 'HISTORIA',
        button: 'Ver mas',
        to: '/historia/'
      },
      {
        id: getUniqueId(),
        image: '/src/assets/images/Instalaciones.png',
        title: 'INSTALACIONES',
        button: 'Ver mas',
        to: '/instalaciones/'
      }
    ]


  return (
    <div id='conocenos' className='c-conocenos-principal'>
      <span data-aos="fade-left" className='c-conocenos-info'>
        <h1>U. E Colegio Metropolitano</h1>
        <p>El Colegio Metropolitano se creó en el mes de Septiembre del año 1988 y actualmente cuenta con  más de 27 promociones de bachilleres, todos ellos ubicados en estudios superiores o ya en el campo de trabajo.</p>
      </span>

      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" className='c-conocenos-services'>
        {SERVICES.map(({ id, title, image, button, to }) => {
          return (
            <div key={id}>
              <img src={image} />
              <p>{title}</p>
              <button onClick={() => navigate(to)}>{button}</button>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Conocenos