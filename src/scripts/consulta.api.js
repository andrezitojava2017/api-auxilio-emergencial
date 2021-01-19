import axios from 'axios';

import cors from 'cors';

const getConsultaBeneficiario = async (data) => {
  var obj = [];
  try {
    var url = `http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-cpf-ou-nis?codigoBeneficiario=${data.cpf}&pagina=1`;
    var opt = {
      headers: {
        'chave-api-dados': '11fb7c03eb5299df9e5e2f79bcd981ec',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Allow-Methods':
          'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    const response = await axios.get(url, opt);
    if (response.data == '' || response.data == null) {
      obj = {
        cpf: `${data.cpf}`,
        nome: `${data.nome}`,
        Message: 'sem informação',
      };

      return obj;
    }
    obj = response.data;
    return obj;
  } catch (error) {
    console.log(
      'Error - erro na consulta do CPF - function getConsultaBeneficiario(cpf)'
    );
    console.log(error);
  }
};

export default {
  getConsultaBeneficiario,
};
