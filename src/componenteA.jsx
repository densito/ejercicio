import React from "react";
import PropTypes from "prop-types";

export class Contacto extends React.Component {
  render() {
    return (
      <div>
        <p>Nombre: {this.props.nombre}</p>
        <p>Apellido: {this.props.apellido}</p>
        <p>Email: {this.props.email}</p>
      </div>
    );
  }
}

Contacto.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
