import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

/*
Req 2 - Similar ao req1, porém aqui vamos criar a estrutura inicial de cada card. Colocaremos apenas a div e o data-testid e renderizaremos no App.js abaixo do título.
*/

/*
Requisito 3 - Nesse requisito vamos passar o título para o componente Title através da props headline, que será um objeto.
*/

/*
Requisito 6 - Vamos pegar os planetas, fazer um map e para cada um, vamos passar como props para o componente PlanetCard.
Obs: não podemos nos esquecer que cada índice terá uma chave para ser identificado no react.
*/
