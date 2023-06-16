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
  Divider,
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
        button: 'Ver mas',
        to: '/proyecto-pedagogico/'
      },
      {
        id: getUniqueId(),
        image: '/img/cuerpoDirectivo.png',
        title: 'CUERPO DIRECTIVO',
        button: 'Ver mas',
        to: '/cuerpo-directivo/'

      },
      {
        id: getUniqueId(),
        image: '/img/history.png',
        title: 'HISTORIA',
        button: 'Ver mas',
        to: '/historia/'
      },
      {
        id: getUniqueId(),
        image: '/img/Instalaciones.png',
        title: 'INSTALACIONES',
        button: 'Ver mas',
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
      <Box data-aos="fade-left"
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'auto'}
        color={'black'}
      >
        <Typography
          textAlign={'center'}
          width={'80%'}
          fontSize={'2.5rem'} paddingTop={'40px'} fontWeight={'700'} color={'var(--primaryColor)'} variant='h1'>U. E Colegio Metropolitano</Typography>
        <Typography mt={'15px'} textAlign={'center'}
          width={'80%'}>El Colegio Metropolitano se creó en el mes de Septiembre del año 1988 y actualmente cuenta con  más de 27 promociones de bachilleres, todos ellos ubicados en estudios superiores o ya en el campo de trabajo.</Typography>
      </Box>

      <Box data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        width={'100%'}
        mt={'30px'}
        height={'auto'}
        display={'flex'}
        flexWrap={'wrap'}
        alignContent={'center'}
        justifyContent={'center'}
        gap={'50px'}
        color={'var(--primaryColor)'}
        textAlign={'center'}
        fontWeight={'600'}
        className='c-conocenos-services'>
        {SERVICES.map(({ id, title, image, button, to }) => {
          return (
            <div key={id}>
              <img src={image} />
              <p>{title}</p>
              <Button sx={{
                color: 'white'
              }} variant='contained' color='secondary' onClick={() => navigate(to)}>{button}</Button>
            </div>
          );
        })}
      </Box>

    </Box>
  )
}

export default Conocenos