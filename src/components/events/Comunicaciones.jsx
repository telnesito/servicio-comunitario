import CardComunicaciones from './CardComunicaciones'
import './Comunicaciones.css'
import { EVENTS } from './events'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Comunicaciones = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div id='eventos' className='c-comunicaciones-principal'>
      <span data-aos="fade-left" className='c-comunicaciones-title'>
        <div />
        <h3>EVENTOS 2023-24</h3>
      </span>

      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" className='c-comunicaciones-cards'>
        {EVENTS.map(({ id, title, img, date, icon }) => <CardComunicaciones key={id} title={title} img={img} date={date} Icon={icon} />)}
      </div>

    </div>
  )
}

export default Comunicaciones