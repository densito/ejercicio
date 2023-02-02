import PropTypes from 'prop-types';
import { useState } from 'react';

export function ComponenteB(props) {
    const [conectado, setConectado] = useState(props.conectado);
  
    function cambiarEstado() {
      setConectado(!conectado);
    }
  
    return (
      <div>
        {conectado ? (
          <p>Contacto en línea</p>
        ) : (
          <p>Contacto no disponible</p>
        )}
        <button onClick={cambiarEstado}>Cambiar estado</button>
      </div>
    );
  }
  
  ComponenteB.propTypes = {
    conectado: PropTypes.bool.isRequired,
  };