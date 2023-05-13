import { Box, Typography } from "@mui/material"
import Header from "../header/Header"
import Foother from "../foother/Foother"
import ScrollToTop from "../../utils/ScrollToTop"

const Noticia_1 = ({ title, text }) => {
  return (
    <Box>
      <Header />
      <ScrollToTop />
      <Box width={'100%'} color={'black'} bgcolor={'var(--backgroundColor)'} display={'flex'} justifyContent={'center'} paddingBottom={'20px'} height={'auto'} minHeight={'400px'} paddingTop={'20px'}>
        <Box width={'80%'} textAlign={'left'}>
          <Typography width={'90%'} variant="h3">{title}</Typography>
          <Typography width={'90%'} variant="body2">{text}</Typography>
        </Box>

      </Box>
      <Foother />
    </Box>
  )
}

export default Noticia_1