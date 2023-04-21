import './Hero.css'

const Noticias = ({ title, prevText, buttonText }) => {
  return (
    <div className='noticias'>
      <span className='hero-info-title'>
        <h2>COLEGIO METROPOLITANO</h2>
        <h1>{title}</h1>
      </span>

      <span>
        <p>{prevText}</p>
      </span>

      <button>{buttonText}</button>


    </div>
  )
}

export default Noticias