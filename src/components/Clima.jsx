import React from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(0) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Max:
                    <span class="red-text text-darken-4">
                        { parseFloat( main.temp_max - kelvin, 10 ).toFixed(0) } &#x2103;
                    </span>
                </p>
                <p>Temperatura Min:
                <span class="blue-text text-darken-4">
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(0) }  &#x2103;
                </span>
                </p>
            </div>
        </div>
     );
}

// Definicion del componente "Clima", que props se le pasan
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;