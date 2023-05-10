import { Modal, Paper, Typography, Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import { useState } from "react"

const EventosModal = ({ open, setOpen }) => {

  const [valor, setValor] = useState('')

  const handleSelect = ({ target }) => {
    setValor(target.value)
    console.log(valor)
  }
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box width={'100vw'} height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Paper elevation={5} sx={{ width: '400px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <Typography>Seleccione en cual evento se publicara</Typography>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id="select-events">Evento</InputLabel>
            <Select

              onChange={handleSelect}
              value={valor}
              label="Seleccionar"
              labelId="select-events"
              id="select"
            >
              <MenuItem value={1}>Evento 1</MenuItem>
              <MenuItem value={2}>Evento 2</MenuItem>
              <MenuItem value={3}>Evento 3</MenuItem>
              <MenuItem value={4}>Evento 4</MenuItem>
              <MenuItem value={5}>Evento 5</MenuItem>
              <MenuItem value={6}>Evento 6</MenuItem>

            </Select>
            <Box display={'flex'} mt={'10px'} gap={'10px'}>
              <Button variant="contained" onClick={() => setOpen(false)}>Publicar</Button>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cerrar</Button>
            </Box>
          </FormControl>

        </Paper>
      </Box>
    </Modal>
  )
}

export default EventosModal