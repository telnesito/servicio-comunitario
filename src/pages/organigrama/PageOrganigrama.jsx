import { Box, Typography } from "@mui/material"
import Foother from "../../components/foother/Foother"
import Header from "../../components/header/Header"
import Organigrama from "../../components/organigrama/Organigrama"
import ScrollToTop from "../../utils/ScrollToTop"
const PageOrganigrama = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Box
        height={'auto'}
        minHeight={'200px'}
        bgcolor={'var(--backgroundColor)'}
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'20px'}
      >
        <Box
          borderBottom={'3px solid var(--primaryColor)'}
          borderRight={'5px solid var(--primaryColor)'}
          borderRadius={'8px'}
          width={'35%'}
          minWidth={'400px'}
          height={'80px'}
          bgcolor={'white'}
        >
          <Box
            display={'flex'}
            width={'98%'}
            height={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Box
              display={'flex'}
              width={'100%'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'end'}
              color={'black'}
            >
              <Typography fontWeight={700}>Presidente</Typography>
              <Typography>Hugo A. Yllaramendy Msc</Typography>

            </Box>
            <img style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%'
            }} src="/img/foto-Colegio-Metro0.webp" alt="foto del presidente Hugo"></img>
          </Box>
        </Box>






      </Box>
      <Organigrama />
      <Foother />
    </div>
  )
}

export default PageOrganigrama