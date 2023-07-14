import { Backdrop, Box, Button, CircularProgress, Modal, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

const ConfirmAction = ({ open, onClose, action, target }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper

        sx={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          width: '400px'
        }}

      >

        {target === "noticia" ?
          <Typography>Estas seguro que desea eliminar esta noticia?</Typography>
          : target === "evento" ?
            <Typography>Estas seguro que desea eliminar este evento?</Typography>
            :
            <Typography>Estas seguro que desea eliminar este trabajador?</Typography>
        }


        <Box
          display={'flex'}
          gap={'10px'}
        >
          <Button onClick={() => {
            setIsLoading(true)
            action()
            setIsLoading(false)
            onClose()
          }} variant='contained' color='error'>Confirmar</Button>
          <Button onClick={onClose} variant='outlined' >Cancelar</Button>
        </Box>

        <Backdrop open={isLoading}>
          <CircularProgress />
        </Backdrop>

      </Paper>

    </Modal>
  )
}

export default ConfirmAction