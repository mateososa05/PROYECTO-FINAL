import React from 'react'

const Header = () => {
  return (
  
    <header>
       <nav className='navbar'>
                <div className='hamburger'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>



            <ul className='nav-links'>
                <li><a href="#">Prendas</a></li>
                <li><a href="#">Galería</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

          

            <div className='logo'>
                
            </div>

       </nav>


      

       <div className='dropdown-menu'>
        <ul>
            <li><a href="#">Prendas</a></li>
            <li><a href="#">Galería</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>



    </header>
  )
}

export default Header
