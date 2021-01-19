import React, { Component } from 'react';
import ConsultaCpf from './componentes/ConsultaCpf';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <p>PROJETO REACT AUXILIO EMERGENCIAL</p>
        <ConsultaCpf />
      </div>
    );
  }
}
