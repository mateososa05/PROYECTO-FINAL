import React from 'react'
import Carrousel from '../componentes/Carrousel/Index'
import Contacto from '../componentes/Contacto/Index'
import Footer from '../componentes/Footer/Index'
import Header from '../componentes/Header/Index'
import Productos from '../componentes/Productos/Index'


function DashPage() {
  return (
    <div>
      <Header/>
      <Carrousel/>
      <Productos/>
      <Footer/>
      <Contacto/>
    </div>
  )
}

export default DashPage