import { Box, Modal, Paper, Table, Typography, TextField, Button, InputLabel, Select, MenuItem, CircularProgress, Backdrop } from '@mui/material'
import React, { useState } from 'react'
import { updateWorker } from "../../api/organigramaManage";

const DeleteWorker = ({ onClose, isOpen, user }) => {
  const [selectedFile, setselectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const initialState = {
    nombres: "",
    apellidos: "",
    cargo: "",
    especilidad: "",
    img: "",
  };
  const [workerData, setWorkerData] = useState(initialState);

  const handleGetWorkerData = (data, field) => {
    setWorkerData({
      ...workerData,
      [field]: data,
    });
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setselectedFile(file);
  };

  const onSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const response = await updateWorker(
        {
          nombres: workerData.nombres,
          apellidos: workerData.apellidos,
          cargo: workerData.cargo,
        }, user.id, user.especilidad, selectedFile
      )
    } catch (error) {
      console.log(error)
    }
    setWorkerData(initialState);
    setselectedFile(null)
    setIsLoading(false)
    onClose()

  }

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
          minHeight: "420px",
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          width={"90%"}
          component={"form"}
          onSubmit={onSubmit}
        >
          <Box display={"flex"} gap={"10px"}>
            <TextField
              label={"Nombres"}
              variant="filled"
              type="text"
              size="small"
              sx={{ width: "50%" }}
              required
              helperText="El nombre esta compuesto de letras de A-Za-z"
              onChange={({ target }) =>
                handleGetWorkerData(target.value, "nombres")
              }
              value={workerData.nombres}
            />

            <TextField

              label={"Apellidos"}
              variant="filled"
              type="text"
              size="small"
              sx={{ width: "50%" }}
              helperText="El apellido esta compuesto de letras de A-Za-z"
              onChange={({ target }) =>
                handleGetWorkerData(target.value, "apellidos")
              }
              value={workerData.apellidos}
            />
          </Box>

          <TextField
            label={"Cargo"}
            variant="filled"
            type="text"
            size="small"
            sx={{ width: "100%" }}
            required
            helperText="El cargo es el rol a ejercier, p.e: Inglés 4to. y 5to. Año "
            onChange={({ target }) =>
              handleGetWorkerData(target.value, "cargo")
            }
            value={workerData.cargo}
          />

          <InputLabel label="input-file">Foto del trabajador</InputLabel>
          <TextField
            onChange={handleFileChange}
            variant="standard"
            helperText="Agregar imagen tamaño carnet con buena iluminacion"
            required
            type="file"
          />

          <Box display={"flex"} gap={"10px"}>
            <Button
              type="submit"
              sx={{ width: "20%", minWidth: "100px" }}
              variant="contained"
            >
              Actualizar
            </Button>
            <Button
              onClick={() => setWorkerData(initialState)}
              sx={{ width: "25%", minWidth: "150px" }}
              variant="text"
            >
              Limpiar campos
            </Button>
          </Box>

        </Box>



        <Backdrop open={isLoading}>
          <CircularProgress />
        </Backdrop>
      </Paper>
    </Modal>
  )
}

export default DeleteWorker