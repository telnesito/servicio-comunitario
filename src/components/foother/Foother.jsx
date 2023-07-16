import { Link } from 'react-router-dom';
import './Foother.css'
import { IgButton } from './IgButton'
import {

  Box, Typography,

} from "@mui/material";

const Foother = () => {

  return (
    <Box id='foother' pt={'40px'} pb={'40px'} height={'auto'} alignContent={'center'} justifyContent={'center'} gap={'20px'} flexDirection={{ xs: 'column', sm: 'column', lg: 'row', md: 'row' }} display={'flex'} width={'100%'} className='c-footer-principal' bgcolor={'var(--primaryColor)'}>

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
        <Typography sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center'
          },
          width: {
            xl: '100%',
            lg: '100%',
            md: '100%',
            sm: '90%',
            xs: '90%'
          }
        }} >Siguenos en nuestras redes sociales, encuentranos como Colegio Metropolitano </Typography>
        <IgButton />
      </Box>
      <Box display={'flex'} alignItems={{ md: 'start', lg: 'start', xl: 'start', sm: 'center', xs: 'center' }} flexDirection={'column'} height={'100%'} width={{ lg: '25%', xl: '25%', md: '25%', sm: '100%', xs: '100%' }}  >
        <h3>Importante</h3>
        <Link to={'/administracion'}>Sesion administrativa</Link>
        <Link to={'/proyecto-pedagogico'}>Proyecto Pedagogico</Link>
        <Link to={'/historia'}>Historia</Link>

        <Link to={'/galeria'}>Galeria</Link>

        <Link to={'/cuerpo-directivo'}>Organigrama</Link>

      </Box>

    </Box>
  )
}

export default Foother