import './NavLinks.css'
import { getUniqueId } from 'unique-id-generator-javascript'

const NavLinks = () => {

  const LINK_INICIO =
    [
      {
        seccion: 'Noticias importantes',
        id: getUniqueId(),
        to: '#comunicaciones'
      },
      {
        seccion: 'Conocenos',
        id: getUniqueId(),
        to: '#conocenos'
      },

      {
        seccion: 'Servicios',
        id: getUniqueId(),
        to: '#servicios'
      },
      {
        seccion: 'Eventos',
        id: getUniqueId(),
        to: '#eventos'
      },

      {
        seccion: 'Google Maps',
        id: getUniqueId(),
        to: '#googlemaps'
      }
    ]


  return (
    <>
      <nav className='c-navlinks' >
        {LINK_INICIO.map(({ id, seccion, to }) => <a className='linknav' href={to} key={id}> {seccion}</a>)}
      </nav>
    </>
  )
}

export default NavLinks