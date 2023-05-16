import './NavLinks.css'
import { getUniqueId } from 'unique-id-generator-javascript'
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
const NavLinks = () => {

  const LINK_INICIO =
    [
      {
        seccion: 'Noticias importantes',
        id: getUniqueId(),
        to: '#comunicaciones'
      },
      {
        seccion: 'Conocenos',
        id: getUniqueId(),
        to: '#conocenos'
      },

      {
        seccion: 'Servicios',
        id: getUniqueId(),
        to: '#servicios'
      },
      {
        seccion: 'Eventos',
        id: getUniqueId(),
        to: '#eventos'
      },
      {
        seccion: 'Contactanos',
        id: getUniqueId(),
        to: '#foother'
      },
    ]


  return (
    <>
      <Box bgcolor={'var(--primaryColor)'} display={{ xs: 'none', md: 'flex' }} alignItems={'center'} zIndex={'99999'} justifyContent={'left'} height={'45px'} gap={'30px'} position={'sticky'} top={'0'} paddingLeft={'30px'} component={'nav'}  >
        {LINK_INICIO.map(({ id, seccion, to }) => <a className='linknav' href={to} key={id}> {seccion}</a>)}
      </Box>
    </>
  )
}

export default NavLinks