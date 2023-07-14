import { Button } from '@mui/material'
import './ProyectoPedagogico.css'
import { useNavigate } from 'react-router'
const ProyectoPedagogico = () => {
  const navigate = useNavigate()
  return (
    <div className='c-principal-proyecto'>


      <main className='c-principal-info'>
        <header className="top">
          <h2 className="subtitulo">Proyecto Pedagógico del Plantel</h2>
          <div className="franja-amarilla-afuera">
            <div className="franja-amarilla"></div>
          </div>
        </header>
        <div className="texto">
          <p>Cumpliendo disposiciones del despacho ministerial al cual estamos adscritos como delegación privada, estamos presentando en esta oportunidad nuestro Proyecto Pedagógico del Plantel, el cual tiene a la fecha una vigencia de 10 años, pues la Institución estuvo determinada por principios filosóficos, pedagógicos e instrucciones derivados de la dilatada trayectoria en el campo de la docencia, formación de docentes e investigación educativa de sus fundadores.</p>
          <p>Dichos principios se resumen en el lema de la Institución: “Aprendiendo con Alegría, Disciplina y Eficiencia”. Significando con ello que el acto de aprender no debe tener como entorno la suprema autoridad del docente y la rigidez de una normativa que sea generadora de tensión, angustia y temor, lo cual determina -sin duda- un aprendizaje, pero que se difumina rápidamente al estar asociado con circunstancias desagradables.Sin embargo, un proceso de aprendizaje como juego, diversión y lleno de ALEGRIA puede fácilmente convertirse en una anarquía incompatible con la adquisición de ciertas competencias que requieren método sistemático, orden y DISCIPLINA, ingrediente éste también indispensable para la formación y desarrollo de la personalidad del niño.</p>
          <p>Finalmente, una escuela donde se aprenda con alegría y disciplina solamente, estará incompleta desde el punto de vista de la economía humana o economía de vida; en otras palabras, la calidad y cantidad de competencias logradas en el esfuerzo escolar deben corresponder a los esfuerzos de tiempo, dinero y energías invertidas.</p>
          <p>Es por ello que el tercer ingrediente de nuestro proyecto ha sido la EFICIENCIA. Los resultados hasta el presente año han sido:</p>
          <ul className="lista">
            <li>Aceptación creciente del colegio por parte de los representantes.</li>
            <li>Amor al colegio por parte de los estudiantes. Esto se ha demostrado por el incremento de alumnos atendidos año tras año.</li>
            <li>Buenos niveles de aprendizaje logrados, lo cual se demuestra a través de los índices académicos y aprobación de los exámenes de admisión de las diversas universidades por parte de nuestros estudiantes.</li>
            <li>Más de 27 promociones de bachilleres, todos ellos ubicados en estudios superiores o ya en el campo de trabajo.</li>
          </ul>
          <Button sx={{
            color: 'white',
            width: {
              xl: '200px',
              lg: '200px',
              md: '200px',
              sm: '100%',
              xs: '100%'
            }
          }} variant='contained' color='secondary' onClick={() => navigate('/historia')}>Historia</Button>
        </div>
      </main>



    </div>
  )
}

export default ProyectoPedagogico