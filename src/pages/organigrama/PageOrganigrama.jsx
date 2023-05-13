import Foother from "../../components/foother/Foother"
import Header from "../../components/header/Header"
import Organigrama from "../../components/organigrama/Organigrama"
import ScrollToTop from "../../utils/ScrollToTop"
const PageOrganigrama = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Organigrama />
      <Foother />
    </div>
  )
}

export default PageOrganigrama