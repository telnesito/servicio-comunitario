import Comunicaciones from "../../components/events/Comunicaciones"
import Foother from "../../components/foother/Foother"
import Header from "../../components/header/Header"
import NavLinks from "../../components/header/NavLinks"
import Hero from "../../components/hero/Hero"
import Conocenos from "../../components/meetUs/Conocenos"
import Services from "../../components/services/Services"

const Inicio = () => {
  return (
    <div>
      <Header />
      <NavLinks />
      <Hero />
      <Conocenos />
      <Services />
      <Comunicaciones />
      <Foother />
    </div>
  )
}

export default Inicio