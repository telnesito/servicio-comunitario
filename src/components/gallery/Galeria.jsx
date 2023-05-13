import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, Button } from "@mui/material"

import './Galeria.css'
import '../organigrama/Organigrama.css'
import '../hero/Hero.css'
const Galeria = () => {

  const images = [

    {
      src: "/img/img5.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img4.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img6.webp",
      width: 270,
      height: 312,
    },
    {
      src: "/img/img7.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img8.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img9.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img10.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/img11.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/library1.webp",
      width: 320,
      height: 312,
    },
    {
      src: "/img/library2.webp",
      width: 420,
      height: 312,
    },
    {
      src: "/img/libraryclerks.webp",
      width: 420,
      height: 212,
    },
    {
      src: "/img/pinsti_2.webp",
      width: 320,
      height: 312,
    },

  ];
  return (
    <div className='c-a'>

      <div className='prob-a'>
        <Carousel className={'c-c'} showThumbs={false} autoPlay infiniteLoop transitionTime={2000} >
          {images.map(({ src }) =>
            <Box key={src}>

              <img height={'590px'} src={src}></img>

            </Box>
          )}
        </Carousel>
        <Box height={'700px'} width={'50%'} display="flex" flexDirection={'column'} alignItems={'left'} justifyContent={'initial'}>
          <Typography width={'100%'} variant="h6" fontWeight={700} color={'var(--primaryColor)'}>
            COLEGIO METROPOLITANO
          </Typography>
          <Typography width={'100%'} variant="h4" fontWeight={700} color={'var(--primaryColor)'}>
            Galeria Educativa
          </Typography>
          <Typography variant={'body2'} color={'black'}> Aquí podrás sumergirte en un recorrido visual por las experiencias y momentos inolvidables que hemos compartido en nuestro querido colegio.<br /><br />

            Desde fotos de nuestros talentosos estudiantes inmersos en emocionantes proyectos y desafíos académicos, hasta instantáneas de nuestros dedicados profesores guiando y motivando a cada alumno en su aprendizaje, encontrarás una variedad de momentos que reflejan la pasión por la educación y el espíritu colaborativo que impregna nuestro colegio.<br /><br />

            No faltarán imágenes de las diversas actividades y eventos que hemos llevado a cabo en nuestras instalaciones. Podrás apreciar las risas, la alegría y la camaradería en los festivales culturales, las competencias académicas y mucho más. Cada imagen cuenta una historia única y refleja el compromiso de nuestra comunidad con la excelencia y el crecimiento personal.
            <br /><br />
            Estamos orgullosos de la diversidad y la inclusión que caracteriza al Colegio Metropolitano. Nuestras imágenes celebran la multiplicidad de talentos y culturas presentes en nuestra comunidad, reafirmando nuestro compromiso con la formación integral de nuestros estudiantes.

          </Typography>
          <Button sx={{ backgroundColor: 'var(--primaryColor)', marginTop: '15px' }} variant='contained'>Conoce mas!</Button>
        </Box>
      </div>
    </div>
  )
}

export default Galeria