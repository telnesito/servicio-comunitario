import { Box, Divider, Button, Typography } from "@mui/material"
import { MdNewspaper, MdEvent, MdGroups, MdLogin } from "react-icons/md";
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from "react-router";
import { logOut } from "../Login/auth";
const Nav = () => {
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

  const handleLogOut = async () => {
    try {
      await logOut()

      navigate('/administracion')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box borderRight={'1px solid #00000020'} width={'20%'} minWidth={'70px'} alignItems={'left'} justifyContent={'flex-start'} display={'flex'} flexDirection={'column'} bgcolor={'var(--primaryColor)'} height={'100vh'} minHeight={'700px'}>
      <Box padding={'15px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <img height={'95px'} width={'100px'} src="/src/assets/images/logoMetropolitano.png"></img>
        <Typography textAlign={'left'} width={'150px'} fontSize={'20px'} fontWeight={'700'} color={'white'}>Colegio Metropolitano</Typography>
      </Box>
      <Divider />
      {
        MENU_EDITOR.map(({ id, Icon, title, to }) =>
          <Box display={'flex'} justifyContent={'left'} key={id}>
            <Button onClick={() => navigate(to)} sx={{ display: 'flex', justifyContent: 'left', gap: '10px', padding: '20px' }} fullWidth type="text">
              <Icon style={{ color: 'white', fontSize: '20px' }} />
              <Typography textTransform={'capitalize'} textAlign={'left'} color={'white'} sx={{ fontSize: '15px' }}>{title}</Typography>
            </Button>
          </Box>)
      }
      <Divider />

      <Button onClick={handleLogOut} sx={{ display: 'flex', justifyContent: 'left', gap: '10px', padding: '20px' }} fullWidth type="text">
        <MdLogin style={{ color: 'white', fontSize: '20px' }} />
        <Typography textTransform={'capitalize'} textAlign={'left'} color={'white'} sx={{ fontSize: '15px' }}>Cerrar sesion</Typography>

      </Button>


    </Box>
  )
}

export default Nav
