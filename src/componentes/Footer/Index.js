import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="contacto" class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
                             
                             
                              //-----importar imagen--------------


                    <p className="footer-texto text-center">Venta de ropa. Asociate con nuestra empresa.</p>
                    <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                        <a href="https://twitter.com/jotta_sonda" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            //--------importar-----------
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            //---------importar-----------
                        </a>
                        <a href="https://www.instagram.com/jotta_sonda/" target="_blank" rel="noopener noreferrer">
                            //---------importar-----------
                        </a>
                        <a href="mailto:janedoe@micorreo.com" target="_blank" rel="noopener noreferrer">
                            //---------importar-----------
                        </a>
                    </div>
                    <div className="derechos-de-autor">Creado por Jotta S &#169;</div>
            </footer>
        </div>
    )
}

export default Footer
