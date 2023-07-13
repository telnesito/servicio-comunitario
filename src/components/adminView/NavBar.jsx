import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MdAccountCircle } from 'react-icons/md'

const NavBar = ({ title }) => {
  return (
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
          {title}
        </Typography>

        <IconButton size="large">
          <MdAccountCircle size={'30px'} color="white" />
        </IconButton>

      </Box>

    </Box>
  )
}

export default NavBar