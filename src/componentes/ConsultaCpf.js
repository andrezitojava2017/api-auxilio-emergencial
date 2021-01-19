import React, { Component } from 'react';
import api from '../scripts/consulta.api.js';

export default class ConsultaCpf extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validade" id="cpf" />
          <label className="active" htmlFor="cpf">
            Informe um CPF
          </label>
        </div>
      </div>
    );
  }
}
