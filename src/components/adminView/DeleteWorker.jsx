import { Box, Modal, Paper, Table, Typography } from '@mui/material'
import React from 'react'

const DeleteWorker = ({ onClose, isOpen, user }) => {
  console.log(user)

  return (
    <Modal
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      open={isOpen}
      onClose={onClose}
    >
      <Paper
        sx={{
          width: {
            xl: "50%",
            lg: "50%",
            md: "50%",
            sm: "80%",
            xs: "90%",
          },
          height: "auto",
          minHeight: "520px",
          paddingBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100px"}
          width={"90%"}
          justifyContent={"center"}
          alignItems={"left"}
          gap={"10px"}
        >
          <Typography variant="h6">Actualizar trabajador</Typography>

          <Typography variant="body2">
            Rellenar los nuevos campos
          </Typography>
        </Box>

        <Box>


        </Box>


      </Paper>

    </Modal>
  )
}

export default DeleteWorker