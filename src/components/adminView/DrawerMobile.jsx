import React from 'react'
import Nav from './Dashboard'
import { Box, Divider, Button, Typography, Menu, MenuItem, Drawer } from "@mui/material"
import { MdNewspaper, MdEvent, MdGroups, MdLogin } from "react-icons/md";
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from "react-router";
import { BsViewList } from "react-icons/bs";
const DrawerMobile = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const MENU_EDITOR = [
    {
      id: getUniqueId(),
      Icon: MdNewspaper,
      title: 'Noticias',
      to: '/administracion/main/noticias'
    },
    {
      id: getUniqueId(),
      Icon: MdEvent,
      title: 'Eventos',
      to: '/administracion/main/eventos'
    },
    {
      id: getUniqueId(),
      Icon: MdGroups,
      title: 'Organigrama',
      to: '/administracion/main/organigrama'
    },

  ]

  return (
    <Drawer
      anchor='left'
      open={isOpen}
      onClose={onClose}

    >
      <Box
        width={'100vw'}
        maxWidth={'300px'} display={'flex'} flexDirection={'column'} bgcolor={'white'}
      >
        <Box
          height={'100px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
        >
          <img width={'70px'} src="/img/logoMetropolitano.png" />
          <Typography fontFamily={'Poppins'} color={'var(--primaryColor)'}>Colegio Metropolitano</Typography>
        </Box>

        <Box
        >
          <Divider />
          {
            MENU_EDITOR.map(({ id, Icon, title, to }) =>
              <Box display={'flex'} justifyContent={'left'} key={id}>
                <Button onClick={() => navigate(to)} sx={{ display: 'flex', justifyContent: 'left', gap: '25px', padding: '15px', width: '100%' }} type="text">
                  <Icon fontSize={'20px'} color="#00000090" />
                  <Typography textTransform={'capitalize'} textAlign={'left'} color={'black'} fontFamily={'Poppins'} sx={{ fontSize: '15px' }}>{title}</Typography>
                </Button>
              </Box>)
          }
          <Divider />
          <Button onClick={() => navigate('/')} sx={{ display: 'flex', justifyContent: 'left', gap: '25px', padding: '15px', width: '100%' }} type="text">
            <BsViewList fontSize={'20px'} color="#00000090" />
            <Typography textTransform={'capitalize'} textAlign={'left'} color={'black'} fontFamily={'Poppins'} sx={{ fontSize: '15px' }}>Vista previa</Typography>
          </Button>


        </Box>



      </Box>


    </Drawer>
  )
}

export default DrawerMobile