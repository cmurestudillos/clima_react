import React, { useState } from 'react';
// Componentes
import Error from './Error';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const [error, guardarError] = useState(false);
    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;
    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // Envio del formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        // Al enviar el formulario
        guardarConsultar(true);
    }

    return ( 
        <form onSubmit={handleSubmit} >
            {error ? <Error mensaje="Ambos campos son obligatorios." /> : null }
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={handleChange} />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange} >
                    <option value="">-- Seleccione un país --</option>
                    <option value="DE">Alemania</option>
                    <option value="FR">Francia</option>
                    <option value="ES">Espa&ntilde;a</option>
                    <option value="US">Estados Unidos</option>
                    <option value="PT">Portugal</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="input-field col s12">
                <button type="submit" className="waves-effect waves-teal btn-large btn-block yellow accent-4 col s12">Buscar...</button>
            </div>
        </form>
     );
}

// Definicion del componente "Formulario", que props se le pasan
Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    guardarBusqueda : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired,
}
 
export default Formulario;