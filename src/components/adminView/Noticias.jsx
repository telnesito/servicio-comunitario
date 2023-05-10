import { Box, Button, Card, CardActions, CardContent, Paper, TextField, Typography } from "@mui/material"
import { getUniqueId } from "unique-id-generator-javascript";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from "../../utils/functions/toolbarOptions";

const Noticias = () => {
  // Guardar valor
  const [value, setValue] = useState('')
  // Manejador que muestra el texto que se va escrbiendo
  const handleEditorText = (text) => {
    setValue(text)
    console.log(value)
  }
  // Aqui van las noticias que se traen la base de datos
  const CARD_ELEMENT = [
    {
      title: 'Noticia 1',
      id: getUniqueId(),
      spoiler: '¡Bienvenidos al Colegio Metropolitano! Pronto abriremos nuestras inscripciones para el próximo año escolar. Ofrecemos una educación de calidad a precios accesibles, con programas y actividades extracurriculares que complementan el aprendizaje en el aula. Nuestro personal altamente calificado y comprometido se asegura de que cada estudiante tenga un ambiente de aprendizaje seguro y enriquecedor. Mantente atento a nuestra página web para más información sobre cómo unirte a nuestra comunidad educativa'
    },

    {
      title: 'Noticia 2',
      id: getUniqueId(),
      spoiler: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Noticia 3',
      id: getUniqueId(),
      spoiler: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]

  return (
    // Contenedor general
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'80%'} height={'100vh'} minHeight={'700px'} bgcolor={'var(--backgroundColor)'} >
      {/* Titulo */}
      <Box padding={'10px'} width={'95%'}>
        <Paper elevation={1} sx={{ padding: '10px' }}>
          <Typography padding={'5px'} variant="h6" width={'100%'} fontWeight={'700'} color={'var(--primaryColor)'}>Titulo</Typography>
          <TextField placeholder="Ingrese titulo de la noticia" fullWidth ></TextField>
        </Paper>
      </Box>

      <Box width={'95%'} height={'450px'} color={'black'}>
        <Paper sx={{ padding: '10px', height: '400px' }} elevation={1}>
          <Typography fontWeight={'700'} color={'var(--primaryColor)'} padding={'5px'} variant="h6" width={'100%'} >Descripcion</Typography>
          {/* Editor de texto */}
          <ReactQuill value={value} onChange={handleEditorText} placeholder="Ingrese la descripcion" style={{ height: '310px' }} modules={toolbarOptions} theme="snow" />

        </Paper>
      </Box>
      {/* Cartas */}
      <Box alignItems={'center'} gap={'30px'} height={'270px'} display={'flex'} justifyContent={'center'}>

        {CARD_ELEMENT.map(({ title, id, spoiler }) =>
          <Card sx={{ width: '30%', height: '180px' }} elevation={1} key={id}>
            <CardContent>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2">{spoiler.slice(0, 100)}...</Typography>
              <CardActions >
                <Button sx={{ mt: '10px', bgcolor: 'var(--primaryColor)' }} variant="contained">Subir</Button>
                <Button sx={{ mt: '10px', borderColor: 'var(--primaryColor)', color: 'var(--primaryColor)' }} variant="outlined">Actualizar</Button>
              </CardActions>
            </CardContent>
          </Card>)}

      </Box>




    </Box>
  )
}

export default Noticias