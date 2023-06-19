import { useNavigate } from "react-router"
import { IgButton } from "../foother/IgButton"
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import './Formulario.css'
import { login } from "./auth"
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from "../../hooks/ContextLoginProvider"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"
const Formulario = () => {
  const navigate = useNavigate()
  const { uid, setUid } = useContext(LoginContext)
  const initialCredentials = {
    email: '',
    password: ''
  }
  const [credentials, setCredentials] = useState(initialCredentials)


  const handleLogin = async (e) => {

    e.preventDefault()


    try {
      const response = await login(credentials.email, credentials.password)

      if (response.uid) {
        setUid(true)
        localStorage.setItem('uid', true)
        console.log(uid)
        navigate('/administracion/main/noticias')

      }


    } catch (error) {
      console.log(error)
    }

  }
  const handleGetText = (name, value) => {
    setCredentials({ ...credentials, [name]: value })
  }
  return (
    <Paper
      elevation={4}
      sx={{
        width: '30%',
        minWidth: '400px',
        height: '50%',
        minHeight: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.7'

      }}


    >
      <Box
        width={'90%'}
        height={'80px'}
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}

      >
        <Typography variant="h5">Iniciar sesion</Typography>
        <Typography variant="body2">Accede a tu cuenta para continuar</Typography>
      </Box>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: '10px',
          marginBottom: '20px',
        }}

        onSubmit={handleLogin} >
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
          width={'90%'}
        >
          <TextField label={'Email'} variant="filled" required placeholder="Ingrese email" onChange={({ target }) => handleGetText('email', target.value)} type="email"></TextField>
          <TextField label={'Contraseña'} variant="filled" required placeholder="Ingrese contraseña" onChange={({ target }) => handleGetText('password', target.value)} type="password"></TextField>

          <p className="txt-abajo">Contraseña olvidada? <span
            style={{
              textDecoration: 'underline',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >Recuperar</span></p>
          <Button variant="contained" size="large" color="primary" type="submit" >Ingresar</Button>
        </Box>

      </form>




    </Paper>
  )
}

export default Formulario