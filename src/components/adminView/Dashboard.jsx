import { Box, Divider, Button, Typography, Menu, MenuItem } from "@mui/material"
import { MdNewspaper, MdEvent, MdGroups, MdLogin } from "react-icons/md";
import { getUniqueId } from 'unique-id-generator-javascript'
import { useNavigate } from "react-router";
import { BsViewList } from "react-icons/bs";
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





  return (
    <Box sx={{
      display: {
        xs: 'none',
        sm: 'none',
        md: 'flex',
        lg: 'flex',
        xl: 'flex'


      }
    }} width={'280px'} display={'flex'} flexDirection={'column'} minHeight={'700px'} bgcolor={'white'} height={'auto'} justifyContent={'space-between'}>
      <Box
        mt={'60px'}
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

      <Box
        mb={'20px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
      >
        <img width={'70px'} src="/img/logoMetropolitano.png" />
        <Typography fontFamily={'Poppins'} color={'var(--primaryColor)'}>Colegio Metropolitano</Typography>
      </Box>




    </Box>
  )
}

export default Nav
