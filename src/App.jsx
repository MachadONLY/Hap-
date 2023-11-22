import Cabecalho from "./components/Cabecalho"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
     <Cabecalho/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
