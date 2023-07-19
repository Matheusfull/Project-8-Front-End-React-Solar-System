import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

/*
Req 3 - Para o componente receber uma props -que é um objeto com informações vinda de uma componente pai- ela precisa ter a seguinte sintaxe: this.props pois o this é um termo genérico para se referenciar ao objeto que está sendo instanciado. Na linguagem das ruas seria assim: "Objeto que está sendo instanciado, você receberá uma informação, vou chamar de props, e nela haverá o conteúdo que você precisa desestruturá-lo para ter acesso. Beleza ?"
*/
