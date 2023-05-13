import './Organigrama.css'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Organigrama = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className="c-organigrama-principal">


      {/* <!--CUERPO DIRECTIVO--> */}
      <div className='c-all'>
        <article data-aos="fade-up" className="cuerpo-directivo">

          <h2 className="cuerpo">CUERPO DIRECTIVO</h2>
          {/* <!--LADO IZQUIERDO--> */}
          <div className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>Presidente</h4>
                <p>Lic. Psic. Hugo A. Yllaramendy Msc</p>
              </div>
              <img src="/img/foto-Colegio-Metro0.webp" alt="foto del presidente Hugo" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Directora de la Institución</h4>
                <p>Ing.María Barberi</p>
              </div>
              <img src="/img/Matemática-4to.-y-5to.-Año-Lcda.Ing_.María-Barberi.webp" alt="Directora María Barberi" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Coordinadora Académica 1er. a 3er. Grado</h4>
                <p>Lic. Silenia Villarroel</p>
              </div>
              <img src="/img/Lcda.-Silenia-Villarroel-Coordinadora-Académia-1er.-a-3er.-grado.webp" alt="coordinadora Silenia Villaroel" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Coordinadora 1ero. a 5to. año</h4>
                <p>Lic. Ann Bertho</p>
              </div>
              <img src="/img/Ann-Kissis-e1635187491406.webp" alt="" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Cobranzas</h4>
                <p>Lic. Dubraska Ramírez</p>
              </div>
              <img src="/img/foto-Colegio-Metro94.webp" alt="" />
            </div>
          </div>
          {/* <!--LADO DERECHO--> */}
          <div className="derecha">
            <div className="vicepresidente">
              <img src="/img/Magaly.webp" alt="foto de la Vicepresidenta Magaly" />
              <div className="letras-der">
                <h4>Vicepresidenta</h4>
                <p>Lic. Or. Elisa Magaly Rubio de Yllaramendy Msc</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Arte-Y-Patrimonio-1ro.-y-2do.-Año-Grupo-estable-1er.año-Lcdo.-José-García.webp" alt="coordinador" />
              <div className="letras-der">
                <h4>Coordinador de Control de Estudios</h4>
                <p>Lcdo. José García</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Gabriela-Higuerey-4to.-B.webp" alt="Coordinadora Gabriela Miguerey" />
              <div className="letras-der">
                <h4>Coordinadora Académica 1er. a 3er. Grado</h4>
                <p>Lic. Gabriela Higuerey</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/foto-Colegio-Metro95.webp" alt="Lic. Estela Velázquez" />
              <div className="letras-der">
                <h4>Administradora</h4>
                <p>Lic. Estela Velázquez</p>
              </div>
            </div>
          </div>
        </article>
        {/* <!--DOCENTES--> */}


        <article className="cuerpo-docentes">
          {/* <!--PREESCOLAR--> */}
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="cuerpo">PREESCOLAR</h2>
          {/* <!--IZQUIERDA--> */}
          <div data-aos="fade-up" className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>Preescolar Nivel I</h4>
                <p>Lcda. Yalu Bastardo</p>
              </div>
              <img src="/img/I-Nivel-Lcda.-Yalu-Bastardo.webp" alt="foto  Licenciada Yalu Bastardo" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Preescolar Nivel III</h4>
                <p>Lcda. Lady Viña</p>
              </div>
              <img src="/img/Lady-Viña-3er-Nivel-Lic.-Educación-Integral-lady.vanessa84@gmail.com_.webp" alt="Lcda. Lady Viña" />
            </div>
          </div>
          {/* <!--DERECHA--> */}
          <div data-aos="fade-up" className="derecha">
            <div className="vicepresidente">
              <img src="/img/Yanetzy-Ortiz-Preescolar-nivel-I.webp" alt="Foto Lcda Yanetzy Ortiz" />
              <div className="letras-der">
                <h4>Preescolar Nivel II</h4>
                <p>Lcda Yanetzy Ortiz</p>
              </div>
            </div>
          </div>
          {/* <!--PRIMARIA--> */}
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="cuerpo">PRIMARIA</h2>
          {/* <!--IZQUIERDA--> */}
          <div data-aos="fade-up" className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>1er. Grado</h4>
                <p>Lcda. Nordy Rodríguez</p>
              </div>
              <img src="/img/1er.-Grado-A-Lcda.-Nordy-Rodríguez.webp" alt="Lcda. Nordy Rodríguez" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>3er. Grado A</h4>
                <p>Lcda. Luzmelys Muñoz</p>
              </div>
              <img src="/img/3er.-Grado-A-Lcda.-Luzmelys-Muñoz.webp" alt="Lcda. Luzmelys Muñoz" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>4to. Grado A</h4>
                <p>Lcda. Yenni Contreras</p>
              </div>
              <img src="/img/5to.-Grado-A-Lcda.-Yenni-Contreras.webp" alt="Lcda. Yenni Contreras" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>5to. Grado A</h4>
                <p>Lcda. Gabriela Higuerey</p>
              </div>
              <img src="/img/5to.-Grado-A-Lcda.-Gabriela-Higuerey.webp" alt="Lcda. Gabriela Higuerey" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>6to. Grado A</h4>
                <p>Lcda. Clamerys Martínez</p>
              </div>
              <img src="/img/6to.-Grado-A-Lcda.-Clamerys-Martínez.webp" alt="" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Inglés Inicial y Primaria</h4>
                <p>Lcda. Sherly Suárez</p>
              </div>
              <img src="/img/Inglés-Inicial-y-Primaria-Lcda.-Sherly-Suárez.webp" alt="" />
            </div>
          </div>

          {/* <!--DERECHA--> */}
          <div data-aos="fade-up" className="derecha">
            <div className="vicepresidente">
              <img src="/img/2do.-Grado-A-Lcda.-Silenia-Villarroel.webp" alt="Lcda. Silenia Villarroel" />
              <div className="letras-der">
                <h4>2do. Grado</h4>
                <p>Lcda. Silenia Villarroel</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/3er.-Grado-B-Lcda.-Jennis-Rivas.webp" alt="Lcda. Jennis Rivas" />
              <div className="letras-der">
                <h4>3er. Grado B</h4>
                <p>Lcda. Jennis Rivas</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/4to.-Grado-B-Lcda.-Johania-Romero.webp" alt="Lcda. Johania Romero" />
              <div className="letras-der">
                <h4>4to. Grado B</h4>
                <p>Lcda. Johania Romero</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/5to.-Grado-B-Lcda.-Claritza-Zambrano.webp" alt="Lcda. Claritza Zambrano" />
              <div className="letras-der">
                <h4>5to. Grado B</h4>
                <p>Lcda. Claritza Zambrano</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/6to.-Grado-B-Prof.-Xiomara-Hernández.webp" alt="Prof. Xiomara Hernández" />
              <div className="letras-der">
                <h4>6to. Grado B</h4>
                <p>Prof. Xiomara Hernández</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/6to.-Grado-B-Prof.-Xiomara-Hernández.webp" alt="Prof. Xiomara Hernández" />
              <div className="letras-der">
                <h4>Educación Física Inicial y Primaria</h4>
                <p>TSU Elías Call</p>
              </div>
            </div>
          </div>
          {/* <!--SECUNDARIA--> */}
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="cuerpo">SECUNDARIA</h2>
          {/* <!--LADO IZQUIERDO--> */}
          <div data-aos="fade-up" className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>Inglés 4to. y 5to. Año</h4>
                <p>Lcda. Ann Kissis</p>
              </div>
              <img src="/img/Ann-Kissis-e1635187491406.webp" alt="Lcda. Ann Kissis" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Arte y Patrimonio 1ro. y 2do. Año.</h4>
                <p>Lic. José García</p>
              </div>
              <img src="/img/Arte-Y-Patrimonio-1ro.-y-2do.-Año-Grupo-estable-1er.año-Lcdo.-José-García.webp" alt="Lic. José García" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Castellano 1ro. a 3er. Año</h4>
                <p>Lcda. Anabelys Velásquez</p>
              </div>
              <img src="/img/Castellano-1ro.-a-3er.-Año-Lcda.-Anabelys-Velásquez.webp" alt="Lcda. Anabelys Velásquez" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Biología 4to. y 5to. Año - Ciencias de la Tierra 5to. Año Metodología de la Investigación 5to. Año</h4>
                <p>Ing. Julimerys Navarro</p>
              </div>
              <img src="/img/Bilogía-4to.-y-5to.-AñoCiencias-Tierra-5to.-Año-Metodolog.-Investigación-5to.-Año-Ing.-Julimerys-Navarro.webp" alt="Ing. Julimerys Navarro" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Educ. Física 2do. 3ro. y 4to. Año Grupo estable de 4to. Año</h4>
                <p>Lcdo. José Escalona</p>
              </div>
              <img src="/img/Lcdo.-José-Escalona-Educ.-Física-2do.-3ro.-y-4to.-Año-Grupo-estable-de-4to.-Año.webp" alt="Lcdo. José Escalona" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Ciencias Naturales 1er. Año – Biología 2do. y 3er. Año</h4>
                <p>Lcda. Roselin Fernández</p>
              </div>
              <img src="/img/Ciencias-Naturales-1er.-Año-Biología-2do.-y-3er.-Año-Lcda.-Roselin-Fernández.webp" alt="Lcda. Roselin Fernández" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Orientación 1ro. a 5to. Año. – Grupo estable de 3er. Año</h4>
                <p>Lcda. Yelmira Brito</p>
              </div>
              <img src="/img/Orientación-1ro.-a-5to.-Año-Grupo-estable-de-3er.-Año-Lcda.-Yelmira-Brito.webp" alt="Lcda. Yelmira Brito" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Castellano y Literatura 4to. y 5to. Año</h4>
                <p>Lcda. Jenny Araque</p>
              </div>
              <img src="/img/Castellano-y-Literatur-4to.-y-5to.-Año-Lcda.-Jenny-Araque.webp" alt="Lcda. Jenny Araque" />
            </div>
          </div>
          {/* <!--LADO DERECHO--> */}
          <div data-aos="fade-up" className="derecha">
            <div className="vicepresidente">
              <img src="/img/Matemática-4to.-y-5to.-Año-Lcda.Ing_.María-Barberi.webp" alt="Lcda./Ing. Maria Gabriela Barberi" />
              <div className="letras-der">
                <h4>Matemática 4to. y 5to. Año.</h4>
                <p>Lcda./Ing. Maria Gabriela Barberi</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Formación-para-la-Soberanía-Nacional-4to.-y-5to.-Año-Ing.-Ana-Muñiz.webp" alt="Ing. Ana Muñiz" />
              <div className="letras-der">
                <h4>Formación para la Soberanía Nacional 4to. y 5to. Año</h4>
                <p>Ing. Ana Muñiz</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Química-3ro.-4to.-y-5to.-Año-Lcda.-Miryam-Ortiz.webp" alt="Lcda. Miryam Ortiz" />
              <div className="letras-der">
                <h4>Química 3ro. 4to. y 5to. Año</h4>
                <p>Lcda. Miryam Ortiz</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Física-3ro.-4to.-y-5to.-Año-Ing.-Luis-Lira.webp" alt="ng. Luis Lira" />
              <div className="letras-der">
                <h4>Física 3ro. 4to. y 5to. Año</h4>
                <p>Ing. Luis Lira</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Inglés-1ro.-2do.-y-3er.-Año-Lcda.-Jesuris-Farías.webp" alt="Prof. Xiomara Hernández" />
              <div className="letras-der">
                <h4>Inglés 1ro. 2do. y 3er. Año</h4>
                <p>Lcda. Jesuris Farías</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/GHC-4to.-y-5to.-Año-Lcdo.-Luis-Hamilton.webp" alt="TSU Elías Call" />
              <div className="letras-der">
                <h4>GHC 4to. y 5to. Año</h4>
                <p>Lcdo. Luis Hamilton</p>
              </div>
            </div>
            <div className="coordinador">
              <img src="/img/Lcda.-Yanain-Barrios-Prof.-Matemáticas-1ro.-y-2do.-Año.webp" alt="Lcda. Yanain Barrios" />
              <div className="letras-der">
                <h4>Matemática 1er. y 2do. Año</h4>
                <p>Lcda. Yanain Barrios</p>
              </div>
            </div>
          </div>
          {/* <!--PERSONAL DE SERVICIO--> */}

          {/* <!--PERSONAL DE SEGURIDAD Y MANTENIMIENTO--> */}
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="cuerpo">SEGURIDAD Y MANTENIMIENTO</h2>
          {/* <!--LADO IZQUIERDO--> */}
          <div data-aos="fade-up" className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>Mantenimiento</h4>
                <p>José Guevara</p>
              </div>
              <img src="/img/foto-Colegio-Metro91.webp" alt="José Guevara" />
            </div>
          </div>
          {/* <!--PERSONAL DE LIMPIEZA--> */}
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="cuerpo">LIMPIEZA</h2>
          {/* <!---LADO IZQUIERDA--> */}
          <div data-aos="fade-up" className="izquierda">
            <div className="presidente">
              <div className="letras">
                <h4>Limpieza</h4>
                <p>Luisa</p>
              </div>
              <img src="/img/foto-Colegio-Metro9.webp" alt="Luisa Limpieza" />
            </div>
            <div className="directora">
              <div className="letras">
                <h4>Limpieza</h4>
                <p>Nivia</p>
              </div>
              <img src="/img/foto-Colegio-Metro7.webp" alt="Nivia Limpieza" />
            </div>
          </div>
          {/* <!--LADO DERECHA--> */}
          <div data-aos="fade-up" className="derecha">
            <div className="vicepresidente">
              <img src="/img/foto-Colegio-Metro8.webp" alt="Nervis Limpieza" />
              <div className="letras-der">
                <h4>Limpieza</h4>
                <p>Nervis</p>
              </div>
            </div>
          </div>
        </article>
      </div>

    </div>
  )
}

export default Organigrama