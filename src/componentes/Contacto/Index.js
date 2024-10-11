import React from 'react'

const Contacto = () => {
    return (
        <div>
            <section id="contacto" className="contacto seccion-oscura">
                <div className="container">
                    <div class="container text-center rectangulo d-flex justify-content-evenly">
                        <div className="row">
                            <div className="col-12 col-md-4 seccion-titulo">
                                ¡Hablemos!
                            </div>
                            <div className="col-12 col-md-4 descripcion">
                                Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
                            </div>
                            <div className="col-12 col-md-4">
                                <a href="mailto:joaquinsonda5@micorreo.com">
                                    <button type="button">
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
