import React from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="red darken-4 error">{mensaje}</p>
     );
}

// Definicion del componente "Error", que props se le pasan
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;