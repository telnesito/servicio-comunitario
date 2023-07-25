import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import MenuProfile from "./MenuProfile";
import { HiMenu } from "react-icons/hi";
import DrawerMobile from "./DrawerMobile";
import { getAuth } from "firebase/auth";
const NavBar = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isOpen, setisOpen] = useState(false);
  let email;
  const getProfileLoged = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    email = user.email;
  };
  getProfileLoged();

  return (
    <Box
      width={"100%"}
      height={"60px"}
      bgcolor={"var(--primaryColor)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
          gap={"10px"}
        >
          <Typography
            fontWeight={"600"}
            fontFamily={"Poppins"}
            color={"white"}
            fontSize={"20px"}
          >
            {title}
          </Typography>
          <IconButton
            onClick={() => setisOpen(true)}
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "flex",
                xs: "flex",
              },
            }}
          >
            <HiMenu color="white" size={"30px"} />
          </IconButton>
        </Box>
        <IconButton onClick={handleClick} size="large">
          <MdAccountCircle size={"30px"} color="white" />
        </IconButton>
      </Box>

      <MenuProfile
        email={email}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
      <DrawerMobile isOpen={isOpen} onClose={() => setisOpen(false)} />
    </Box>
  );
};

export default NavBar;
