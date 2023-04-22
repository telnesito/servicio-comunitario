import './CardComunicaciones.css'

const CardComunicaciones = ({ title, date, img, Icon }) => {
  return (
    <div className="c-comunicaciones-card">
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