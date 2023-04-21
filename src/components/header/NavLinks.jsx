import './NavLinks.css'
import { getUniqueId } from 'unique-id-generator-javascript'

const NavLinks = () => {

  const LINK_INICIO =
    [
      {
        seccion: 'Conocenos',
        id: getUniqueId()
      },

      {
        seccion: 'Comunicaciones',
        id: getUniqueId()
      },
      {
        seccion: 'Servicios',
        id: getUniqueId()
      },
      {
        seccion: 'Eventos',
        id: getUniqueId()
      },
      {
        seccion: 'Novedades',
        id: getUniqueId()
      },
      {
        seccion: 'Google Maps',
        id: getUniqueId()
      }
    ]


  return (
    <>
      <nav className='c-navlinks' >
        {LINK_INICIO.map(({ id, seccion }) => <p key={id}> {seccion}</p>)}
      </nav>
    </>
  )
}

export default NavLinks