import React from 'react'
import LogoGithub from '../../assets/logos/LogoGithub.webp';
import LogoInstagram from '../../assets/logos/LogoInstagram.webp'
import LogoLinkedin from '../../assets/logos/LogoLinkedin.png'
import LogoGmail from '../../assets/logos/LogoGmail.png'

const Footer = () => {
    return (
        <div>
            <footer id="contacto" class="seccion-oscura d-flex flex-column align-items-center justify-content-center">




                <p className="footer-texto text-center">Venta de ropa. Asociate con nuestra empresa.</p>
                <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                    <a href="https://twitter.com/jotta_sonda" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img className='logos' src={LogoGithub} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img className='logos' src={LogoLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/jotta_sonda/" target="_blank" rel="noopener noreferrer">
                        <img className='logos' src={LogoInstagram} />
                    </a>
                    <a href="mailto:janedoe@micorreo.com" target="_blank" rel="noopener noreferrer">
                        <img className='logos' src={LogoGmail} />
                    </a>
                </div>
                <div className="derechos-de-autor">Creado por Mateo, Agustina, Martin y Joaquin &#169;</div>
            </footer>
        </div>
    )
}

export default Footer
