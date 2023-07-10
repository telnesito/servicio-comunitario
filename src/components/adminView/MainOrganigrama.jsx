import {
  Box,
  IconButton,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getWorkers } from "../../api/organigramaManage";

import {
  BsPersonFillGear,
  BsPersonFillAdd,
  BsPersonFillX,
} from "react-icons/bs";

import useModal from "../../hooks/useModal";
import Organigrama from "./Organigrama";
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

  return (
    <Box
      bgcolor={"var(--backgroundColor)"}
      width={"100%"}
      height={"auto"}
      minHeight={"700px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        flexDirection={"column"}
        gap={"20px"}
        display={"flex"}
        width={"90%"}
        height={"90%"}
        margin={"20px"}
      >
        <Typography fontFamily={"Poppins"} color={"black"} fontSize={"20px"}>
          Trabajadores
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>

                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cuerpoDirectivo.map(
                ({ nombres, apellidos, cargo, img }, index) => (
                  <TableRow key={index}>
                    <TableCell width={"5%"}>
                      <img
                        style={{
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        height={"70px"}
                        width={"70px"}
                        src={img}
                      ></img>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {nombres}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {apellidos}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {cargo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>

                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {educacionInicial.map(
                ({ nombres, apellidos, cargo, img }, index) => (
                  <TableRow key={index}>
                    <TableCell width={"5%"}>
                      <img
                        style={{
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        height={"70px"}
                        width={"70px"}
                        src={img}
                      ></img>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {nombres}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {apellidos}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {cargo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>

                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {educacionPrimaria.map(
                ({ nombres, apellidos, cargo, img }, index) => (
                  <TableRow key={index}>
                    <TableCell width={"5%"}>
                      <img
                        style={{
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        height={"70px"}
                        width={"70px"}
                        src={img}
                      ></img>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {nombres}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {apellidos}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {cargo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>

                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {educacionMedia.map(
                ({ nombres, apellidos, cargo, img }, index) => (
                  <TableRow key={index}>
                    <TableCell width={"5%"}>
                      <img
                        style={{
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        height={"70px"}
                        width={"70px"}
                        src={img}
                      ></img>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {nombres}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {apellidos}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {cargo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>

                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Mantenimiento.map(
                ({ nombres, apellidos, cargo, img }, index) => (
                  <TableRow key={index}>
                    <TableCell width={"5%"}>
                      <img
                        style={{
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        height={"70px"}
                        width={"70px"}
                        src={img}
                      ></img>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {nombres}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {apellidos}
                      </Typography>
                    </TableCell>

                    <TableCell width={"30%"}>
                      <Typography fontFamily={"Poppins"} color={"black"}>
                        {cargo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <SpeedDial
        sx={{
          position: "fixed",
          zIndex: "9999",
          bottom: "20px",
          right: "20px",
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
