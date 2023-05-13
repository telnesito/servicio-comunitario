import './CardComunicaciones.css'
import { useNavigate } from 'react-router'
const CardComunicaciones = ({ title, date, img, Icon }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(title)} className="c-comunicaciones-card">
      <img width={'100%'} height={'75%'} src={img}></img>
      <span className='c-c-descripcion'>
        <p className='c-c-title'>{title}</p>
        <div className='c-comunicaciones-divider' />
        <p> <Icon /> {date}</p>
      </span>
    </div>
  )
}

export default CardComunicaciones