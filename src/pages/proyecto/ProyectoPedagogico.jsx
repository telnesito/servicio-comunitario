import Foother from "../../components/foother/Foother"
import Header from "../../components/header/Header"
import ProyectoPedagogico from "../../components/proyectoPedagofico/ProyectoPedagogico"
import ScrollToTop from "../../utils/ScrollToTop"
const PageProyecto = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <ProyectoPedagogico />
      <Foother />

    </div>
  )
}

export default PageProyecto