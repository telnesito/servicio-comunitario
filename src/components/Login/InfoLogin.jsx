import './Formulario'
import { useNavigate } from 'react-router'
const InfoLogin = () => {
  const navigate = useNavigate()
  return (
    <div className="c-infologin-principal">
      <div>
        <h2>COLEGIO METROPOLITANO</h2>

        <p>Bienvenido al panel de administración del contenido de la página web estudiantil del Colegio Metropolitano. Aquí podrás actualizar la información sobre eventos, noticias, actividades y cualquier otra novedad relevante para la comunidad estudiantil. Nuestra plataforma es fácil de usar y te permite gestionar el contenido de manera eficiente y rápida. ¡Gracias por confiar en nosotros para mantener informada a la comunidad escolar!</p>

        <button onClick={() => navigate('/')}>Ir a la web</button>
      </div>

    </div>
  )
}

export default InfoLogin