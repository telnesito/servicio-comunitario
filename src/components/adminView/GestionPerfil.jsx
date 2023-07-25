import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import NavBar from "./NavBar";
import { useState } from "react";

const GestionPerfil = () => {
  const auth = getAuth();
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [newData, setNewData] = useState(initialState);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [severity, setSeverity] = useState(null);
  const updateUser = async () => {
    try {
      setIsLoading(true);
      await updateEmail(auth.currentUser, newData.email);
      await updatePassword(auth.currentUser, newData.password);
      setErr("Perfil actualizado correctamente");
      setSeverity("success");
      setNewData(initialState);
      setIsLoading(false);
    } catch ({ message }) {
      setErr(message);
      setSeverity("error");
      setIsLoading(false);
    }
  };
  const getNewData = (type, value) => setNewData({ ...newData, [type]: value });
  const onSubmit = (e) => {
    e.preventDefault();

    if (newData.password === newData.confirmPassword) {
      updateUser();
    } else {
      setErr("Asegurese de que las contraseñas sean iguales en ambos campos");
      setSeverity("error");
    }
  };

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
          component={"form"}
          onSubmit={onSubmit}
        >
          <Typography fontSize={"20px"} fontFamily={"Poppins"} color={"black"}>
            Actualizar perfil
          </Typography>
          <Typography color={"black"}>
            Ingresar los nuevos dato de la cuenta administrador
          </Typography>
          {err && (
            <Alert severity={severity}>
              <Typography>{err}</Typography>
            </Alert>
          )}
          <TextField
            helperText="Asegurese de agregar un correo electronico valido, si es incorrecto no podrá recuperar la contraseña en un futuro"
            sx={
              {
                //   width: "40%",
              }
            }
            label="Correo electronico"
            onChange={({ target }) => getNewData("email", target.value)}
            required
            type="email"
            variant="filled"
            value={newData.email}
          ></TextField>
          <TextField
            helperText="La contraseña debe ser mayor a 5 digitos"
            sx={
              {
                //   width: "40%",
              }
            }
            onChange={({ target }) => getNewData("password", target.value)}
            label="Contraseña"
            type="password"
            required
            value={newData.password}
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
            onChange={({ target }) =>
              getNewData("confirmPassword", target.value)
            }
            value={newData.confirmPassword}
          ></TextField>

          <Button type="submit" color="primary" variant="contained">
            Actualizar
          </Button>
        </Box>
      </Box>
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </Box>
  );
};

export default GestionPerfil;
