import { Button } from '@mui/material'
import './Historia.css'
import { useNavigate } from 'react-router'
const Historia = () => {
  const navigate = useNavigate()
  return (
    <div className='c-principal-proyecto '>
      <main className='c-principal-info'>
        <header className="top">
          <h2 className="subtitulo">HISTORIA</h2>
          <div className="franja-amarilla-afuera">
            <div className="franja-amarilla"></div>
          </div>
        </header>
        <div className="texto">
          <p>El Colegio Metropolitano se creó en el mes de Septiembre del año 1988. Sus fundadores fueron el Licenciado Psic. Hugo Alberto Yllaramendy Rodríguez Msc y la Licenciada Or. Elisa Magaly Rubio de Yllaramendy Msc, ambos con maestría en diseño de instrucción y tecnología educativa de la Universidad del Estado de Florida, Talahasee USA. El primero de ellos, Psicólogo Escolar y la segunda, Especialista en el Area de Orientación. Ambos de dilatada trayectoria en el campo educativo: Colegio San Ignacio de Caracas, La Salle de Mérida, Diversificado Normal Valecillos, Liceo Simón Bolívar, Universidad Católica Andrés Bello, Universidad de los Andes, Escuela Técnica Eleazar López Contreras en San Cristóbal. Universidad de Oriente, Universidad de Guayana y Fundación La Salle en Puerto Ordaz, completando cada uno de ellos 43 y 38 años respectivamente dedicados a la educación en diferentes niveles.
          </p>
          <p>Los niveles de instrucción que se imparten van desde el primer nivel de pre-escolar hasta el II año de ciencias del ciclo diversificado. Cuenta con tres patios de recreo, una cancha deportiva, dos laboratorios y veinticuatro aulas de clase, además de las áreas destinadas a oficinas, biblioteca y sala de profesores; el cuarto de reproducción de materiales y cuatro depósitos para pinturas, materiales eléctricos, deportivos y de mantenimiento en general, tales como herramientas, equipos etc..
          </p>
          <p>Hasta el presente, hemos graduado más de veintisiete promociones de bachilleres del Colegio Metropolitano con un alto porcentaje de ubicación en las Universidades Nacionales. Asimismo, tenemos en este momento un número significativo de egresados en el campo de trabajo profesional.</p>
          <p>El sistema educativo de la institución, se ha orientado -desde el principio- a desarrollar en el estudiante el aprendizaje activo; es decir, a no conformarse con la cátedra del profesor, sino que las investigaciones complementarias que el alumno lleva a cabo por su propia iniciativa, forman parte sustancial de todas sus evaluaciones. El ambiente familiar y de compañerismo es otra característica del Colegio. Familiar, no solamente en el ambiente interno sino de apertura total a las familias, a fin de que éstas se sientan cómodas al visitar nuestras instalaciones, relacionarse con los maestros y profesores así como los directivos. De esta manera hemos logrado hasta ahora la anhelada fusión entre familia y escuela, tan encomiada en toda la literatura educativa académica como una de las metas más preciadas de toda institución dedicada a la formación de juventudes.</p>
          <Button sx={{
            color: 'white',
            width: {
              xl: '200px',
              lg: '200px',
              md: '200px',
              sm: '100%',
              xs: '100%'
            }
          }} variant='contained' color='secondary' onClick={() => navigate('/proyecto-pedagogico')}>PROYECTO PEDAGÓGICO</Button>
        </div>



      </main>




    </div>
  )
}

export default Historia