import {
  Box,
  Button,
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
import NavBar from "./NavBar";
import DeleteWorker from "./DeleteWorker";
const MainOrganigrama = () => {
  const { closeModal, openModal, open } = useModal();
  const { closeModal: closeDelete, openModal: openDelete, open: isOpenDelete } = useModal()

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
      boxSizing={'border-box'}
      height={"100vh"}
      minHeight={"700px"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={'column'}
    >
      <NavBar title={'Trabajadores'} />
      <Box
        flexDirection={"column"}
        gap={"20px"}
        display={"flex"}
        width={"90%"}
        height={"90%"}
        margin={"20px"}
      >



        <Tabs sx={{
          bgcolor: 'background.paper',
          borderRadius: '5px',
          color: 'black',
        }}
          variant="scrollable"
          scrollButtons="auto"
          value={value} onChange={handleChange}>
          <Tab label="Cuerpo directivo" />
          <Tab label="Educacion inicial" />
          <Tab label="Educacion primaria" />
          <Tab label="Educacion Media" />
          <Tab label="Mantenimiento" />

        </Tabs>
        <Box width={"90%"}
        >
          <Button startIcon={<BsPersonFillAdd />}
            onClick={openModal}

            variant="contained">Agregar trabajador</Button>

        </Box>
        {value === 0 && <TableWorkers especilidad={'Cuerpo directivo'} workers={cuerpoDirectivo} />}
        {value === 1 && <TableWorkers especilidad={'Educacion inicial'} workers={educacionInicial} />}
        {value === 2 && <TableWorkers especilidad={'Educacion primaria'} workers={educacionPrimaria} />}
        {value === 3 && <TableWorkers especilidad={'Educacion media'} workers={educacionMedia} />}
        {value === 4 && <TableWorkers especilidad={'Mantenimiento'} workers={Mantenimiento} />}





      </Box>


      <Organigrama open={open} closeModal={closeModal} />
      <DeleteWorker isOpen={isOpenDelete} onClose={closeDelete} />
    </Box >
  );
};

export default MainOrganigrama;
