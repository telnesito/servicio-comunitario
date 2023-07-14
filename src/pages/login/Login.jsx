import { Box, Typography } from "@mui/material"
import Formulario from "../../components/Login/Formulario"
import './login.css'
import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()
  return (

    <Box
      width={'100vw'}
      boxSizing={'border-box'}
      height={'100vh'}
      minHeight={'700px'}

      display={'flex'}
      gap={'10px'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}


      sx={{
        backgroundImage: 'url(/img/image.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        width={'90%'}
        justifyContent={'center'}
      >
        <img onClick={() => navigate('/')} width={'100px'} height={'95px'} src="img/logoMetropolitano.png"></img>
        <Typography
          sx={{
            textShadow: '5px 5px 5px #000000'
          }}
          variant="h5"
          fontWeight={'600'}
        >Gestion Administrativa</Typography>
      </Box>
      <Formulario />

    </Box>
  )
}

export default Login