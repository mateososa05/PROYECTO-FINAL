import React from 'react'

const Contacto = () => {
    return (
        <div>
            <section id="contacto" className="contacto seccion-oscura">
                <div id='contacto' className="container">
                    <div class="container text-center rectangulo d-flex justify-content-evenly">
                        <div className="row">
                            <div className="col-12 col-md-4 seccion-titulo">
                                <h2 className='hablemos' >¡Hablemos!</h2>
                            </div>
                            <div className="col-12 col-md-4 descripcion">
                                <p id='parrafo-contacto' >Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <a href="mailto:joaquinsonda5@micorreo.com">
                                    <button id='button-contact' type="button">
                                        Contacto
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacto
