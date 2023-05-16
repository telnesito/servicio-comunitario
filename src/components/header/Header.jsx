import './Header.css'
import { useNavigate } from 'react-router'
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

import { HiMenu } from 'react-icons/hi'

import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  return (
    <header className="c-header">
      <nav className="c-h-link">

        <Box sx={{ display: { lg: 'none', md: 'none' } }} pl={'20px'} width={'100%'}>
          <IconButton size='large' sx={{ display: { lg: 'none', md: 'none' } }} onClick={() => setOpen(true)}>
            <HiMenu />
          </IconButton>
        </Box>
        <span className='c-h-principalLink'>
          <Drawer

            anchor='top'
            open={open}
            onClose={() => setOpen(false)}
          >
            <Box
              height={'400px'}
              display={'flex'}
              width={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              gap={'10px'}
            >
              <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <img width={80} height={75} src="/img/logoMetropolitano.png"></img>
                <Box color={'var(--primaryColor)'}>
                  <Typography>COLEGIO</Typography>
                  <Typography>METROPOLITANO</Typography>
                </Box>
              </Box>

              <Box justifyContent={'center'} display={'flex'} flexWrap={'wrap'} onClick={() => setOpen(false)} width={'80%'}>

                <Button href='#comunicaciones' sx={{ color: 'var(--primaryColor)' }}>Comunicados</Button>
                <Button href='#conocenos' sx={{ color: 'var(--primaryColor)' }}>Conocenos</Button>
                <Button href='#servicios' sx={{ color: 'var(--primaryColor)' }}>Servicios</Button>
                <Button href='#eventos' sx={{ color: 'var(--primaryColor)' }}>Eventos</Button>
                <Button href='#foother' sx={{ color: 'var(--primaryColor)' }}>Ubicanos</Button>

              </Box>
              <Box gap={'10px'} display={'flex'} flexDirection={'column'} width={'80%'}>
                <Divider />
                <Button sx={{ bgcolor: 'var(--primaryColor)' }} variant='contained' onClick={() => navigate('/administracion')} >Iniciar sesion</Button>
                <Button onClick={() => navigate('/')} sx={{ color: 'var(--primaryColor)' }}> Inicio</Button>
                <Button onClick={() => navigate('/cuerpo-directivo')} sx={{ color: 'var(--primaryColor)' }}> ORGANIGRAMA</Button>
                <Button onClick={() => navigate('/galeria')} sx={{ color: 'var(--primaryColor)' }}> GALERIA</Button>
              </Box>

            </Box>

          </Drawer>
          <Box gap={'30px'} justifyContent={'left'} display={{ xs: 'none', md: 'flex' }} flexDirection={'row'} onClick={() => setOpen(false)} width={'70%'}>

            <Button fullWidth onClick={() => navigate('/')} sx={{ color: 'var(--primaryColor)' }}> Inicio</Button>
            <Button fullWidth onClick={() => navigate('/cuerpo-directivo')} sx={{ color: 'var(--primaryColor)' }}> ORGANIGRAMA</Button>
            <Button fullWidth onClick={() => navigate('/galeria')} sx={{ color: 'var(--primaryColor)' }}> GALERIA</Button>

          </Box>
        </span>

        <Box width={'30%'} display={{ xs: 'none', md: 'flex' }} alignItems={'center'} justifyContent={'center'}>
          <img width={80} height={75} src="/img/logoMetropolitano.png"></img>
          <Box color={'var(--primaryColor)'}>
            <Typography fontSize={'1.3rem'} fontWeight={700}>COLEGIO</Typography>
            <Typography fontSize={'1.3rem'} fontWeight={700}>METROPOLITANO</Typography>
          </Box>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} width={'15%'}>
          <Button sx={{ bgcolor: 'var(--primaryColor)' }} variant='contained' onClick={() => navigate('/administracion')} >Iniciar sesion</Button>
        </Box>



      </nav>
    </header>
  )
}

export default Header