import { getUniqueId } from 'unique-id-generator-javascript'
import CardComunicaciones from './CardComunicaciones'
import './Comunicaciones.css'
import { BsCalendarDate } from 'react-icons/bs'

const Comunicaciones = () => {

  const EVENTS = [
    {
      title: 'Carvanal',
      img: '/src/assets/images/carnaval.png',
      icon: BsCalendarDate,
      date: 'Febrero 19, 2023',
      id: getUniqueId()
    },

    {
      title: 'Comunicado',
      img: '/src/assets/images/comunicado.png',
      icon: BsCalendarDate,
      date: 'Enero 22, 2023',
      id: getUniqueId()
    },

    {
      title: 'Ajuste de precio',
      img: '/src/assets/images/ajustePrecio.png',
      icon: BsCalendarDate,
      date: 'Marzo 17, 2023',
      id: getUniqueId()
    },

    {
      title: 'Premiacion',
      img: '/src/assets/images/premiacion.png',
      icon: BsCalendarDate,
      date: 'Mayo 19, 2023',
      id: getUniqueId()
    },

    {
      title: 'Dia del niño',
      img: '/src/assets/images/dianino.png',
      icon: BsCalendarDate,
      date: 'Julio 19, 2023',
      id: getUniqueId()
    },

    {
      title: 'Carvanal',
      img: '/src/assets/images/carnaval.png',
      icon: BsCalendarDate,
      date: 'Febrero 19, 2023',
      id: getUniqueId()
    },

  ]

  return (
    <div id='eventos' className='c-comunicaciones-principal'>
      <span className='c-comunicaciones-title'>
        <div />
        <h3>COMUNICACIONES 2023-24</h3>
      </span>

      <div className='c-comunicaciones-cards'>
        {EVENTS.map(({ id, title, img, date, icon }) => <CardComunicaciones key={id} title={title} img={img} date={date} Icon={icon} />)}
      </div>

      <button>Ver todos</button>
    </div>
  )
}

export default Comunicaciones