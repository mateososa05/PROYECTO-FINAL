import React from 'react'

const Header = () => {
  return (
    //aca comienza la barra de navegacion, la extrai copiando lo que ya habiamos hecho.
    <header>
        //-----------navbar------------
       <nav className='navbar'>
                <div className='hamburger'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            //---------nav links------

            <ul className='nav-links'>
                <li><a href="#">Prendas</a></li>
                <li><a href="#">Galería</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            //-----aca debe ir el logo importado-----

            <div className='logo'>
                
            </div>

       </nav>


        //----------dropdown menu------------

       <div className='dropdown-menu'>
        <ul>
            <li><a href="#">Prendas</a></li>
            <li><a href="#">Galería</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>

    //----------finaliza la navbar-----------

    </header>
  )
}

export default Header
