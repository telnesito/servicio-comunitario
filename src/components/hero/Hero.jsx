import './Hero.css'
import { Carousel } from 'react-responsive-carousel';
import Noticias from './Noticias';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {

  return (
    <div className='c-hero-principal'>
      <Carousel showThumbs={false} autoPlay infiniteLoop transitionTime={1000} className='c-hero-info'>

        <Noticias title={'PREINSCRIPCCIONES 2023-24'} prevText={'¡Bienvenidos al Colegio Metropolitano! Pronto abriremos nuestras inscripciones para el próximo año escolar. Ofrecemos una educación de calidad a precios accesibles, con programas y actividades extracurriculares que complementan el aprendizaje en el aula. Nuestro personal altamente calificado y comprometido se asegura de que cada estudiante tenga un ambiente de aprendizaje seguro y enriquecedor. Mantente atento a nuestra página web para más información sobre cómo unirte a nuestra comunidad educativa'} buttonText={'Saber mas!'} />

        <Noticias title={'AJUSTE DE UNIDAD DE CREDITO'} buttonText={'Saber mas!'} prevText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />


        <Noticias title={'ENTREGA DE BOLETAS 2022-2023'} buttonText={'Saber mas!'} prevText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />


      </Carousel>
    </div>
  );
}

export default Hero