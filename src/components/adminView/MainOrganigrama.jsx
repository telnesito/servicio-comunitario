import {
  Box,
  IconButton,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getWorkers } from "../../api/organigramaManage";

import {
  BsPersonFillGear,
  BsPersonFillAdd,
  BsPersonFillX,
  BsPersonFillCheck,
} from "react-icons/bs";

import useModal from "../../hooks/useModal";
import Organigrama from "./Organigrama";
import { MdAccountCircle } from "react-icons/md";
import TableWorkers from "./TableWorkers";
const MainOrganigrama = () => {
  const { closeModal, openModal, open } = useModal();

  const [cuerpoDirectivo, setCuerpoDirectivo] = useState([]);
  const [educacionInicial, setEducacionInicial] = useState([]);
  const [educacionPrimaria, setEducacionPrimaria] = useState([]);
  const [educacionMedia, setEducacionMedia] = useState([]);
  const [Mantenimiento, setMantenimiento] = useState([]);
  useEffect(() => {
    getWorkers(
      (cuerpoDirectivo) => setCuerpoDirectivo(cuerpoDirectivo),
      "Cuerpo directivo"
    );
    getWorkers(
      (educacionInicial) => setEducacionInicial(educacionInicial),
      "Educacion inicial"
    );
    getWorkers(
      (educacionPrimaria) => setEducacionPrimaria(educacionPrimaria),
      "Educacion primaria"
    );
    getWorkers(
      (educacionMedia) => setEducacionMedia(educacionMedia),
      "Educacion media"
    );
    getWorkers(
      (mantenimiento) => setMantenimiento(mantenimiento),
      "Mantenimiento"
    );
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      bgcolor={"var(--backgroundColor)"}
      width={"100%"}
      height={"100vh"}
      minHeight={"700px"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={'column'}
    >
      <Box width={'100%'}
        height={'60px'}
        bgcolor={'var(--primaryColor)'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box width={'90%'} display={'flex'} justifyContent={'space-between'}
          alignItems={'center'}>
          <Typography fontWeight={'600'} fontFamily={"Poppins"} color={"white"} fontSize={"20px"}>
            Trabajadores
          </Typography>

          <IconButton size="large">
            <MdAccountCircle size={'30px'} color="white" />
          </IconButton>

        </Box>

      </Box>
      <Box
        flexDirection={"column"}
        gap={"20px"}
        display={"flex"}
        width={"90%"}
        height={"90%"}
        margin={"20px"}
      >

        <Tabs sx={{
          color: 'black',
          width: '100%'
        }} variant="scrollable" value={value} onChange={handleChange}>
          <Tab label="Cuerpo directivo" />
          <Tab label="Educacion inicial" />
          <Tab label="Educacion primaria" />
          <Tab label="Educacion Media" />
          <Tab label="Mantenimiento" />

        </Tabs>
        {value === 0 && <TableWorkers workers={cuerpoDirectivo} />}
        {value === 1 && <TableWorkers workers={educacionInicial} />}
        {value === 2 && <TableWorkers workers={educacionPrimaria} />}
        {value === 3 && <TableWorkers workers={educacionMedia} />}
        {value === 4 && <TableWorkers workers={Mantenimiento} />}





      </Box>
      <SpeedDial

        sx={{
          position: "fixed",
          zIndex: "9999",
          bottom: "20px",
          right: "40px",
        }}
        ariaLabel="Editar trabajadores"
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          onClick={openModal}
          icon={<BsPersonFillAdd size={"25px"} color="var(--primaryColor)" />}
          tooltipTitle={"Agregar trabajador"}
        ></SpeedDialAction>

        <SpeedDialAction
          icon={<BsPersonFillGear size={"25px"} color="var(--primaryColor)" />}
          tooltipTitle={"Actualizar trabajador"}
        ></SpeedDialAction>

        <SpeedDialAction
          icon={<BsPersonFillX size={"25px"} color="var(--primaryColor)" />}
          tooltipTitle={"Eliminar trabajador"}
        ></SpeedDialAction>
      </SpeedDial>

      <Organigrama open={open} closeModal={closeModal} />
    </Box>
  );
};

export default MainOrganigrama;
