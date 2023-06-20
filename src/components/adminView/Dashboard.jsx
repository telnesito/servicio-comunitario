import { Box, Divider, Button, Typography } from "@mui/material"
import { MdNewspaper, MdEvent, MdGroups, MdLogin } from "react-icons/md";
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from "react-router";
import { logOut } from "../Login/auth";
import { useContext } from "react";
import { LoginContext } from "../../hooks/ContextLoginProvider";
const Nav = () => {
  const navigate = useNavigate()
  const { uid, setUid } = useContext(LoginContext)

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

  const handleLogOut = async () => {
    try {
      await logOut()
      setUid(false)
      localStorage.removeItem('uid')
      navigate('/administracion')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box borderRight={'1px solid #00000020'} width={'100%'} minWidth={'70px'} alignItems={'center'} justifyContent={'space-around'} display={'flex'} flexDirection={'row'} bgcolor={'var(--primaryColor)'} height={'90px'}>

      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')} padding={'15px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <img height={'80px'} width={'90px'} src="/img/logoMetropolitano.png"></img>
        <Typography textAlign={'left'} width={'150px'} fontSize={'20px'} fontWeight={'700'} color={'white'}>Colegio Metropolitano</Typography>
      </Box>
      {
        MENU_EDITOR.map(({ id, Icon, title, to }) =>
          <Box display={'flex'} justifyContent={'left'} key={id}>
            <Button onClick={() => navigate(to)} sx={{ display: 'flex', justifyContent: 'left', gap: '10px', padding: '20px' }} type="text">
              <Icon style={{ color: 'white', fontSize: '20px' }} />
              <Typography textTransform={'capitalize'} textAlign={'left'} color={'white'} sx={{ fontSize: '15px' }}>{title}</Typography>
            </Button>
          </Box>)
      }
      <Divider />

      <Button variant="contained" color="secondary" onClick={handleLogOut} sx={{ display: 'flex', justifyContent: 'left', gap: '10px', padding: '20px' }} type="text">
        <MdLogin style={{ color: 'white', fontSize: '20px' }} />
        <Typography textTransform={'capitalize'} textAlign={'left'} color={'white'} sx={{ fontSize: '15px' }}>Cerrar sesion</Typography>

      </Button>


    </Box>
  )
}

export default Nav
