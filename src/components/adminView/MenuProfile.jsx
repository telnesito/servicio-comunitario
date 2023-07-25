import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Divider } from "@mui/material";
import { MdAccountCircle } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { logOut } from "../Login/auth";
import { LoginContext } from "../../hooks/ContextLoginProvider";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
const MenuProfile = ({ open, handleClose, anchorEl, email }) => {
  const { uid, setUid } = React.useContext(LoginContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      setUid(false);
      localStorage.removeItem("uid");
      Navigate("/administracion");
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfile = () => {
    navigate("/administracion/main/perfil");
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Box width={"auto"}>
        <MenuItem
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <BsPersonFillCheck size={"25px"} />
          {email}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfile}>Gestion de perfiles</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleLogOut();
          }}
        >
          Cerrar sesion
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default MenuProfile;
