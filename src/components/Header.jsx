import React from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Logo
import logo from '../assets/img/logo.png';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                 <a href="#!" className="brand-logo">
                 <img width="64" height="64" src={logo} alt="Logo" title="Logo" /> {titulo}
                </a>
            </div>
        </nav>
     );
}

// Definicion del componente "Header", que props se le pasan
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;