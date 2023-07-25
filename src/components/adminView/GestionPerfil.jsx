import { Box, Button, TextField, Typography } from "@mui/material";
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
        width={"100%"}
        minHeight={"500px"}
        height={"100vh"}
        bgcolor={"var(--backgroundColor)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Box
          mt={"20px"}
          display={"flex"}
          justifyContent={"center"}
          width={"80%"}
          flexDirection={"column"}
          gap={"15px"}
        >
          <Typography fontSize={"20px"} fontFamily={"Poppins"} color={"black"}>
            Actualizar perfil
          </Typography>
          <Typography color={"black"}>
            Ingresar los nuevos dato de la cuenta administrador
          </Typography>
          <TextField
            helperText="Asegurese de agregar un correo electronico valido, si es incorrecto no podrá recuperar la contraseña en un futuro"
            sx={
              {
                //   width: "40%",
              }
            }
            label="Correo electronico"
            required
            type="email"
            variant="filled"
          ></TextField>
          <TextField
            helperText="La contraseña debe ser mayor a 5 digitos"
            sx={
              {
                //   width: "40%",
              }
            }
            label="Contraseña"
            type="password"
            required
            variant="filled"
          ></TextField>
          <TextField
            type="password"
            sx={
              {
                //   width: "40%",
              }
            }
            label="Repetir contraseña "
            required
            variant="filled"
            helperText="Repetir contraseña"
          ></TextField>

          <Button color="primary" variant="contained">
            Actualizar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GestionPerfil;
