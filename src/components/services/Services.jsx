
import './Services.css'
const Services = () => {

  return (
    <div className='c-service-principal'>
      <span className='c-service-title'>
        <h3>SERVICIOS</h3>
        <div />
      </span>

      <p className='service-frase'>Siempre con nuestro lema: <b>Aprendiendo con Alegria, Disciplina y Eficiencia</b></p>

      <div className='c-service-all'>

        <div className='c-serivice-one'>

          <div className='c-service-inicial'>
            <img src='/src/assets/images/EDUCACIONINICIAL.png'></img>
            <p>EDUCACION INICIAL</p>
          </div>

          <p>
            La educación inicial  comprendida entre los  1 y 6 años es una etapa fundamental en el desarrollo de los niños y niñas, ya que sienta las bases para su educación futura.
          </p>
        </div>

        <div className='c-serivice-one'>
          <div className='c-service-primaria'>
            <img src='/src/assets/images/PRIMARIA.png'></img>
            <p>EDUCACION PRIMARIA</p>
          </div>
          <p>La educación primaria es una etapa crucial en la formación de los niños y niñas, ya que es en esta etapa donde se sientan las bases de su educación y se adquieren las habilidades básicas para la vida</p>
        </div>

        <div className='c-serivice-one'>
          <div className='c-service-tecnico'>
            <img src='/src/assets/images/EDUCACIONTECNICA.png'></img>
            <p>EDUCACION MEDIA</p>
          </div>
          <p>La educación media, también conocida como educación secundaria, es una etapa clave en la formación de los jóvenes, ya que les proporciona las herramientas necesarias para su desarrollo personal, social y académico.</p>
        </div>
      </div>






    </div>
  )
}

export default Services