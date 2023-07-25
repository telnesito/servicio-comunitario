import { useNavigate } from "react-router";
import { IgButton } from "../foother/IgButton";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import "./Formulario.css";
import { login } from "./auth";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../hooks/ContextLoginProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../../hooks/ContextUserProvider";
import { auth } from "../../api/config";
const Formulario = () => {
  const navigate = useNavigate();
  const [recovery, setRecovery] = useState(false);
  const { uid, setUid } = useContext(LoginContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [recoveryPassword, setRecoveryPassword] = useState("");
  const [error, setError] = useState("");
  const initialCredentials = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await login(credentials.email, credentials.password);
      setError(response);
      console.log(response);
      if (response.uid) {
        setUid(true);
        setUserInfo(response);
        localStorage.setItem("uid", true);
        console.log(uid);
        navigate("/administracion/main/noticias");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const handleGetText = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };
  const onSubmit = () => {
    try {
      sendPasswordResetEmail(auth, recoveryPassword);
      setRecovery(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Paper
      elevation={4}
      sx={{
        width: {
          xl: "30%",
          lg: "30%",
          md: "40%",
          sm: "60%",
          xs: "90%",
        },
        minWidth: "200px",
        height: "auto",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0.7",
        pt: "15px",
      }}
    >
      <Box
        width={"90%"}
        height={"80px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Typography variant="h5">Iniciar sesion</Typography>
        <Typography variant="body2">
          Accede a tu cuenta para continuar
        </Typography>
      </Box>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "10px",
          marginBottom: "20px",
        }}
        onSubmit={handleLogin}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          width={"90%"}
        >
          <TextField
            label={"Email"}
            variant="filled"
            required
            placeholder="Ingrese email"
            onChange={({ target }) => handleGetText("email", target.value)}
            type="email"
          ></TextField>
          <TextField
            label={"Contraseña"}
            variant="filled"
            required
            placeholder="Ingrese contraseña"
            onChange={({ target }) => handleGetText("password", target.value)}
            type="password"
          ></TextField>

          <p className="txt-abajo">
            Contraseña olvidada?{" "}
            <span
              onClick={() => {
                setRecovery(true);
              }}
              style={{
                textDecoration: "underline",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Recuperar
            </span>
          </p>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            {isLoading ? (
              <CircularProgress
                size={"30px"}
                sx={{
                  color: "white",
                }}
              />
            ) : (
              "Ingresar"
            )}
          </Button>

          {error && (
            <Alert severity="error">
              <Typography>{error}</Typography>
            </Alert>
          )}
        </Box>
        <Modal
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={recovery}
          onClose={() => setRecovery(false)}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: {
                xl: "40%",
                lg: "40%",
                md: "40%",
                sm: "80%",
                xs: "80%",
              },
            }}
            bgcolor={"white"}
            height={"200px"}
          >
            <Box
              gap={"10px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              width={"80%"}
              onSubmit={onSubmit}
              component={"form"}
            >
              <Typography
                color={"black"}
                fontFamily={"Poppins"}
                fontSize={"20px"}
              >
                Ingresar correo electronico de recuperación
              </Typography>
              <TextField
                required
                fullWidth
                variant="standard"
                placeholder="Ingresar correo electronico"
                value={recoveryPassword}
                onChange={({ target }) => {
                  setRecoveryPassword(target.value);
                }}
              ></TextField>
              <Button type="submit" fullWidth variant="contained">
                Enviar
              </Button>
            </Box>
          </Box>
        </Modal>
      </form>
    </Paper>
  );
};

export default Formulario;
