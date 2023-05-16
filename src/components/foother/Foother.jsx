import './Foother.css'
import { IgButton } from './IgButton'
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

const Foother = () => {

  return (
    <Box component={'footer'} id='foother' height={{ sm: '1050px', xs: '1080px', lg: '350px', md: '350px' }} alignContent={'center'} justifyContent={'center'} gap={'20px'} flexDirection={{ xs: 'column', sm: 'column', lg: 'row', md: 'row' }} display={'flex'} width={'100%'} className='c-footer-principal' bgcolor={'var(--primaryColor)'}>

      <Box width={{ lg: '25%', xl: '25%', md: '25%', sm: '100%', xs: '100%' }} display={'flex'} alignItems={'center'} flexDirection={'column'} height={'100%'} textAlign={'center'}>
        <h3>Metropolitano</h3>
        <img height={'120px'} width={'140px'} src='/img/logoMetropolitano.png'></img>
        <p>© 2023 Colegio Metropolitano Puerto Ordaz</p>
      </Box>
      <Box display={'flex'} alignItems={{ md: 'start', lg: 'start', xl: 'start', sm: 'center', xs: 'center' }} flexDirection={'column'} height={'100%'} width={{ lg: '25%', xl: '25%', md: '25%', sm: '100%', xs: '100%' }} >
        <h3>Contacto</h3>

        <p>Paseo Rotario- Vía Venezuela</p>
        <p>Campo B de Ferrominera</p>
        <p>Tlf: 02869232904</p>
        <p>Puerto Ordaz - Edo. Bolívar</p>
        <p>colegiometropolitano.online</p>
      </Box>
      <Box display={'flex'} alignItems={{ md: 'start', lg: 'start', xl: 'start', sm: 'center', xs: 'center' }} flexDirection={'column'} height={'100%'} width={{ lg: '25%', xl: '25%', md: '25%', sm: '100%', xs: '100%' }} >
        <h3>Redes</h3>
        <p>Siguenos en nuestras redes sociales, encuentranos como Colegio Metropolitano </p>
        <IgButton />
      </Box>
      <Box display={'flex'} alignItems={{ md: 'start', lg: 'start', xl: 'start', sm: 'center', xs: 'center' }} flexDirection={'column'} height={'100%'} width={{ lg: '25%', xl: '25%', md: '25%', sm: '100%', xs: '100%' }}  >
        <h3>Importante</h3>
        <p>Comunicaciones</p>
        <p>Proyecto Pedagogico</p>
        <p>Historia</p>
        <p>Instalaciones</p>
        <p>Personal</p>
      </Box>

    </Box>
  )
}

export default Foother