import './Conocenos.css'
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import {

  Box,
  Button,
  Card,
  CardActions,
  CardContent,

  Paper,
  TextField,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
const Conocenos = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  const navigate = useNavigate()

  const SERVICES =
    [
      {
        id: getUniqueId(),
        image: '/img/proyectoPedagogico.png',
        title: 'PROYECTO PEDAGOGICO',
        button: 'Ver más',
        to: '/proyecto-pedagogico/'
      },
      {
        id: getUniqueId(),
        image: '/img/cuerpoDirectivo.png',
        title: 'CUERPO DIRECTIVO',
        button: 'Ver más',
        to: '/cuerpo-directivo/'

      },
      {
        id: getUniqueId(),
        image: '/img/history.png',
        title: 'HISTORIA',
        button: 'Ver más',
        to: '/historia/'
      },
      {
        id: getUniqueId(),
        image: '/img/Instalaciones.png',
        title: 'INSTALACIONES',
        button: 'Ver más',
        to: '/instalaciones/'
      }
    ]


  return (
    <Box display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100vw'}
      height={'auto'}


      bgcolor={'var(--backgroundColor)'}
      id='conocenos'
    >
      <Box

        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'auto'}
        color={'black'}
      >
        <Typography
          data-aos="fade-right"
          textAlign={'center'}
          sx={{
            width: {
              xl: '80%',
              lg: '80%',
              md: '80%',
              sm: '90%',
              xs: '90%'
            },
            fontSize: {
              xl: '2.5rem',
              lg: '2.5rem',
              md: '2.5rem',
              sm: '2rem',
              xs: '2rem'
            }
          }}
          fontSize={'2.5rem'} fontFamily={'Poppins'} paddingTop={'40px'} fontWeight={'700'} color={'var(--primaryColor)'} variant='h1'>U. E Colegio Metropolitano</Typography>
        <Typography data-aos="fade-up" mt={'15px'} textAlign={'center'}
          sx={{
            width: {
              xl: '80%',
              lg: '80%',
              md: '80%',
              sm: '90%',
              xs: '90%'
            }
          }}>El Colegio Metropolitano se creó en el mes de Septiembre del año 1988 y actualmente cuenta con  más de 27 promociones de bachilleres, todos ellos ubicados en estudios superiores o ya en el campo de trabajo.</Typography>
      </Box>

      <Box
        sx={{
          width: {
            xl: '90%',
            lg: '90%',
            md: '90%',
            sm: '80%',
            xs: '100%'

          }
        }}
        flexWrap={'wrap'}
        height={'auto'}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        gap={'50px'}
        color={'var(--primaryColor)'}
        textAlign={'center'}
        fontWeight={'600'}
        pt={'40px'}
        pb={'40px'}

        className='c-conocenos-services'>
        {SERVICES.map(({ id, title, image, button, to }) => {
          return (
            <Box
              data-aos="fade-up"
              sx={{
                width: {
                  xl: '250px',
                  lg: '220px',
                  md: '220px',
                  sm: '220px',
                  xs: '220px'

                }
              }}
              key={id}>
              <img height={'90px'} src={image} />
              <Typography fontWeight={'700'}>{title}</Typography>
              <Button
                sx={{
                  color: 'white',
                  mt: '20px',
                  width: '200px',
                  backgroundColor: "var(--onActionColor)",
                }} variant='contained' color='secondary' onClick={() => navigate(to)}>{button}</Button>
            </Box>
          );
        })}
      </Box>

    </Box >
  )
}

export default Conocenos