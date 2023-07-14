import { Box, Typography } from "@mui/material"
import Foother from "../../components/foother/Foother"
import Header from "../../components/header/Header"
import Organigrama from "../../components/organigrama/Organigrama"
import ScrollToTop from "../../utils/ScrollToTop"
import { useEffect, useState } from "react"
import { getWorkers } from "../../api/organigramaManage"
import CardOrganigrama from "./CardOrganigrama"
import Aos from 'aos'
import "aos/dist/aos.css"
const PageOrganigrama = () => {


  const [cuerpoDirectivo, setCuerpoDirectivo] = useState([])
  const [educacionInicial, setEducacionInicial] = useState([])
  const [educacionPrimaria, setEducacionPrimaria] = useState([])
  const [educacionMedia, setEducacionMedia] = useState([])
  const [Mantenimiento, setMantenimiento] = useState([])
  useEffect(() => {

    getWorkers((cuerpoDirectivo) => setCuerpoDirectivo(cuerpoDirectivo), "Cuerpo directivo")
    getWorkers((educacionInicial) => setEducacionInicial(educacionInicial), "Educacion inicial")
    getWorkers((educacionPrimaria) => setEducacionPrimaria(educacionPrimaria), "Educacion primaria")
    getWorkers((educacionMedia) => setEducacionMedia(educacionMedia), "Educacion media")
    getWorkers((mantenimiento) => setMantenimiento(mantenimiento), "Mantenimiento")
    Aos.init({ duration: 1000 })




  }, [])





  return (
    <Box
      height={'100vh'}
      bgcolor={'var(--primaryColor)'}
      width={'100vw'}
    >
      <Header />
      <ScrollToTop />
      <Box
        bgcolor={'var(--backgroundColor)'}
        paddingTop={'10px'}
      >
        <Typography
          fontWeight={700}

          width={'100%'}
          textAlign={'center'}
          variant="h5" color={'primary'}>Cuerpo directivo</Typography>

        <CardOrganigrama workers={cuerpoDirectivo} />

        <Typography
          fontWeight={700}

          width={'100%'}
          textAlign={'center'}
          variant="h5" color={'primary'}
        >Educacion inicial</Typography>

        <CardOrganigrama workers={educacionInicial} />

        <Typography fontWeight={700}

          width={'100%'}
          textAlign={'center'}
          variant="h5" color={'primary'}>Educacion primaria</Typography>

        <CardOrganigrama workers={educacionPrimaria} />


        <Typography fontWeight={700}

          width={'100%'}
          textAlign={'center'}
          variant="h5" color={'primary'}>Educacion Media</Typography>

        <CardOrganigrama workers={educacionMedia} />


        <Typography fontWeight={700}

          width={'100%'}
          textAlign={'center'}
          variant="h5" color={'primary'}>Mantenimiento</Typography>

        <CardOrganigrama workers={Mantenimiento} />







      </Box>



      <Foother />
    </Box>
  )
}

export default PageOrganigrama