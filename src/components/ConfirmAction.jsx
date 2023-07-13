import { Box, Button, Modal, Paper, Typography } from '@mui/material'
import React from 'react'

const ConfirmAction = ({ open, onClose, action, target }) => {
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
        {target === "noticia" ? <Typography>Estas seguro que desea eliminar esta noticia?</Typography> : <Typography>Estas seguro que desea eliminar este evento?</Typography>}





        <Box
          display={'flex'}
          gap={'10px'}
        >
          <Button onClick={() => {
            onClose()
            action()
          }} variant='contained' color='error'>Confirmar</Button>
          <Button onClick={onClose} variant='outlined' >Cancelar</Button>
        </Box>

      </Paper>

    </Modal>
  )
}

export default ConfirmAction