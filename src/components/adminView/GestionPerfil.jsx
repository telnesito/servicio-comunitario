import { Box } from "@mui/material";
import NavBar from "./NavBar";

const GestionPerfil = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"var(--backgroundColor)"}
    >
      <NavBar title={"Gestionar perfil"} />
      <Box
        width={"80%"}
        minHeight={"500px"}
        height={"100vh"}
        bgcolor={"var(--backgroundColor)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
    </Box>
  );
};

export default GestionPerfil;
