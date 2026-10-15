import Banner_UCAP from "./Components/Banner"
import Areas_de_Especializacion from "./Components/Especializacion"
import Footer from "./Components/Footer"
import Formacion_Destacada from "./Components/FormacionDestacada"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Nos_Acompañan from "./Components/NosAcompañan"
import Novedades_Y_Tendencias from "./Components/Novedades"
import Oferta_Academica_Destacada from "./Components/Oferta"
import Porque_Elegirnos from "./Components/PorqueElejirnos"
import Salida_Laboral_Y_Bolsa_De_Trabajo from "./Components/SalidaLaboras"
import Testimonios from "./Components/Testimonios"

function App() {

  return (
    <div className=" bg-[#151515] h-screen relative min-h-[100vh] pt-3">
      <Header/>
      <Hero/>
      <Oferta_Academica_Destacada/>
      <Salida_Laboral_Y_Bolsa_De_Trabajo/>
      <Nos_Acompañan/>
      <Formacion_Destacada/>
      <Banner_UCAP/>
      <Areas_de_Especializacion/>
      <Novedades_Y_Tendencias/>
      <Porque_Elegirnos/>
      <Testimonios/>
      <Footer/>
    </div>
  )
}
export default App
