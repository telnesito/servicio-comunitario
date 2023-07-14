import {
  Alert,
  Box,
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { addWorker } from "../../api/organigramaManage";
import { useEffect } from "react";
const Organigrama = ({ open, closeModal }) => {
  const [selectedFile, setselectedFile] = useState(null);
  const [workers, setWorkers] = useState([]);
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

  useEffect(() => {

    Aos.init({ duration: 1000 });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();

    await addWorker(
      {
        nombres: workerData.nombres,
        apellidos: workerData.apellidos,
        cargo: workerData.cargo,
      },
      selectedFile,
      workerData.especilidad
    );

    setWorkerData(initialState);
  };

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
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
          <Typography variant="h6">Agregar trabajador</Typography>

          <Typography variant="body2">
            Escribir los datos del trabajor a registrar
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
              required
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
          <InputLabel id="select-especilidad">Especialidad</InputLabel>
          <Select
            onChange={({ target }) =>
              handleGetWorkerData(target.value, "especilidad")
            }
            value={workerData.especilidad}
            required
            variant="standard"
          >
            <MenuItem value={"Cuerpo directivo"}>Cuerpo directivo</MenuItem>

            <MenuItem value={"Mantenimiento"}>Mantenimiento</MenuItem>

            <MenuItem value={"Educacion inicial"}>Educacion inicial</MenuItem>

            <MenuItem value={"Educacion primaria"}>Educacion Primaria</MenuItem>

            <MenuItem value={"Educacion media"}>Educacion Media</MenuItem>
          </Select>
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
              Agregar
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
      </Paper>
    </Modal>
  );
};

export default Organigrama;
