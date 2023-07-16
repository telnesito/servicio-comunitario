import './Services.css'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Box, Typography } from '@mui/material'
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Box
      bgcolor={'var(--primaryColor)'}
      sx={{
        backgroundImage: 'linear-gradient(0deg, rgba(56, 51, 51, 0.221), rgba(44, 10, 10, 0.221)),url(./img/ColoredShapes.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}

      id='servicios' className='c-service-principal'
      gap={'15px'}
      width={'100vw'}
      height={'auto'}
      color={'white'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      pt={'40px'}
      pb={'40px'}
    >
      <Box

        display={'flex'}
        flexDirection={'column'}
        width={'75%'}

        sx={{
          width: {
            xl: '75%',
            lg: '75%',
            md: '75%',
            sm: '75%',
            xs: '90%'
          }
        }}
        justifyContent={'center'}
        alignItems={'left'}
      >
        <Typography zIndex={'9999'} fontWeight={'600'} fontFamily={'Poppins'} fontSize={'2rem'} color={'white'}
          data-aos="fade-right"

        >SERVICIOS</Typography>
        <Box width={'170px'} bgcolor={'var(--onActionColor)'} position={'relative'} top={'-18px'} height={'10px'}
          data-aos="fade-right"
          sx={{
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',

          }}
        ></Box>
        <Typography
          data-aos="fade-up"
          pb={'10px'} color={'white'}>Siempre con nuestro lema: <b>Aprendiendo con Alegria, Disciplina y Eficiencia</b></Typography>
      </Box>


      <Box

        sx={{
          "height": "auto",
          "width": "95%",
          "display": "flex",
          "gap": "15px",
          "justify-content": "center",
          alignItems: {
            xl: 'flex-start',
            lg: 'flex-start',
            md: 'flex-start',
            sm: 'flex-start',
            xs: 'center'
          },
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'column'
          },
          flexWrap: {
            xl: 'nowrap',
            lg: 'nowrap',
            md: 'nowrap',
            sm: 'wrap',
            xs: 'nowrap'
          }

        }}
        className='c-service-all'>

        <Box
          sx={{
            width: {
              xl: '25.5%',
              lg: '25.5%',
              md: '25.5%',
              sm: '40%',
              xs: '90%'
            }
          }}
          className='c-serivice-one'>

          <div className='c-service-inicial'>
            <img src='/img/EDUCACIONINICIAL.png'></img>
            <p>EDUCACIÓN INICIAL</p>
          </div>

          <p >
            La educación inicial  comprendida entre los  1 y 6 años es una etapa fundamental en el desarrollo de los niños y niñas, ya que sienta las bases para su educación futura.
          </p>
        </Box>

        <Box
          sx={{
            width: {
              xl: '25.5%',
              lg: '25.5%',
              md: '25.5%',
              sm: '40%',
              xs: '90%'
            }
          }}

          className='c-serivice-one'>
          <div className='c-service-primaria'>
            <img src='/img/PRIMARIA.png'></img>
            <p>EDUCACIÓN PRIMARIA</p>
          </div>
          <p>La educación primaria es una etapa crucial en la formación de los niños y niñas, ya que es en esta etapa donde se sientan las bases de su educación y se adquieren las habilidades básicas para la vida</p>
        </Box>

        <Box

          sx={{
            width: {
              xl: '25.5%',
              lg: '25.5%',
              md: '25.5%',
              sm: '80%',
              xs: '90%'
            }
          }}
          className='c-serivice-one'>
          <div className='c-service-tecnico'>
            <img src='/img/EDUCACIONTECNICA.png'></img>
            <p>EDUCACIÓN MEDIA</p>
          </div>
          <p>La educación media, también conocida como educación secundaria, es una etapa clave en la formación de los jóvenes, ya que les proporciona las herramientas necesarias para su desarrollo personal, social y académico.</p>
        </Box>
      </Box>






    </Box >
  )
}

export default Services