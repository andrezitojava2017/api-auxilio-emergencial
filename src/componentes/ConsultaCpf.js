import React, { Component } from 'react';
import api from '../scripts/consulta.api.js';

import cors from 'cors';

export default class ConsultaCpf extends Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
    };
  }

  eventoChange = (event) => {
    this.setState({
      cpf: event.target.value,
    });
    // console.log(this.state.cpf);
  };
  buscarCpf = async () => {
    const result = await api.getConsultaBeneficiario(this.state.cpf);
    console.log(result);
  };

  render() {
    const { cpf } = this.state;
    console.log(cpf);
    return (
      <div className="row">
        <div className="input-field col s6">
          <input
            type="text"
            className="validade"
            id="cpf"
            onChange={this.eventoChange}
          />
          <label className="active" htmlFor="cpf">
            Informe um CPF
          </label>
          <input type="button" value="Enviar" onClick={this.buscarCpf} />
        </div>
      </div>
    );
  }
}
